import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ServerCredentialController } from "../serverCredential.controller";
import { ServerCredentialService } from "../serverCredential.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  hostname: "exampleHostname",
  id: "exampleId",
  name: "exampleName",
  port: 42,
  privateKey: "examplePrivateKey",
  updatedAt: new Date(),
  username: "exampleUsername",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  hostname: "exampleHostname",
  id: "exampleId",
  name: "exampleName",
  port: 42,
  privateKey: "examplePrivateKey",
  updatedAt: new Date(),
  username: "exampleUsername",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    hostname: "exampleHostname",
    id: "exampleId",
    name: "exampleName",
    port: 42,
    privateKey: "examplePrivateKey",
    updatedAt: new Date(),
    username: "exampleUsername",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  hostname: "exampleHostname",
  id: "exampleId",
  name: "exampleName",
  port: 42,
  privateKey: "examplePrivateKey",
  updatedAt: new Date(),
  username: "exampleUsername",
};

const service = {
  createServerCredential() {
    return CREATE_RESULT;
  },
  serverCredentials: () => FIND_MANY_RESULT,
  serverCredential: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ServerCredential", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ServerCredentialService,
          useValue: service,
        },
      ],
      controllers: [ServerCredentialController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /serverCredentials", async () => {
    await request(app.getHttpServer())
      .post("/serverCredentials")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /serverCredentials", async () => {
    await request(app.getHttpServer())
      .get("/serverCredentials")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /serverCredentials/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serverCredentials"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /serverCredentials/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serverCredentials"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /serverCredentials existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/serverCredentials")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/serverCredentials")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
