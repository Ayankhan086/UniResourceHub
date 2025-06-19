
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Semester
 * 
 */
export type Semester = $Result.DefaultSelection<Prisma.$SemesterPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model BlackListedToken
 * 
 */
export type BlackListedToken = $Result.DefaultSelection<Prisma.$BlackListedTokenPayload>
/**
 * Model userActivity
 * 
 */
export type userActivity = $Result.DefaultSelection<Prisma.$userActivityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PublishStatus: {
  PUBLISHED: 'PUBLISHED',
  WAITING_FOR_APPROVAL: 'WAITING_FOR_APPROVAL',
  REJECTED: 'REJECTED'
};

export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus]


export const ActivityType: {
  DOWNLOAD: 'DOWNLOAD',
  UPLOAD: 'UPLOAD',
  SAVE: 'SAVE'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]

}

export type PublishStatus = $Enums.PublishStatus

export const PublishStatus: typeof $Enums.PublishStatus

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.semester`: Exposes CRUD operations for the **Semester** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Semesters
    * const semesters = await prisma.semester.findMany()
    * ```
    */
  get semester(): Prisma.SemesterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blackListedToken`: Exposes CRUD operations for the **BlackListedToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlackListedTokens
    * const blackListedTokens = await prisma.blackListedToken.findMany()
    * ```
    */
  get blackListedToken(): Prisma.BlackListedTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userActivity`: Exposes CRUD operations for the **userActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserActivities
    * const userActivities = await prisma.userActivity.findMany()
    * ```
    */
  get userActivity(): Prisma.userActivityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Department: 'Department',
    Semester: 'Semester',
    Course: 'Course',
    Resource: 'Resource',
    BlackListedToken: 'BlackListedToken',
    userActivity: 'userActivity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "department" | "semester" | "course" | "resource" | "blackListedToken" | "userActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Semester: {
        payload: Prisma.$SemesterPayload<ExtArgs>
        fields: Prisma.SemesterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SemesterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SemesterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findFirst: {
            args: Prisma.SemesterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SemesterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findMany: {
            args: Prisma.SemesterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          create: {
            args: Prisma.SemesterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          createMany: {
            args: Prisma.SemesterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SemesterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          delete: {
            args: Prisma.SemesterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          update: {
            args: Prisma.SemesterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          deleteMany: {
            args: Prisma.SemesterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SemesterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SemesterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          upsert: {
            args: Prisma.SemesterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          aggregate: {
            args: Prisma.SemesterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSemester>
          }
          groupBy: {
            args: Prisma.SemesterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SemesterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SemesterCountArgs<ExtArgs>
            result: $Utils.Optional<SemesterCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      BlackListedToken: {
        payload: Prisma.$BlackListedTokenPayload<ExtArgs>
        fields: Prisma.BlackListedTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlackListedTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlackListedTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>
          }
          findFirst: {
            args: Prisma.BlackListedTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlackListedTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>
          }
          findMany: {
            args: Prisma.BlackListedTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>[]
          }
          create: {
            args: Prisma.BlackListedTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>
          }
          createMany: {
            args: Prisma.BlackListedTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlackListedTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>[]
          }
          delete: {
            args: Prisma.BlackListedTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>
          }
          update: {
            args: Prisma.BlackListedTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>
          }
          deleteMany: {
            args: Prisma.BlackListedTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlackListedTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlackListedTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>[]
          }
          upsert: {
            args: Prisma.BlackListedTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackListedTokenPayload>
          }
          aggregate: {
            args: Prisma.BlackListedTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlackListedToken>
          }
          groupBy: {
            args: Prisma.BlackListedTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlackListedTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlackListedTokenCountArgs<ExtArgs>
            result: $Utils.Optional<BlackListedTokenCountAggregateOutputType> | number
          }
        }
      }
      userActivity: {
        payload: Prisma.$userActivityPayload<ExtArgs>
        fields: Prisma.userActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>
          }
          findFirst: {
            args: Prisma.userActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>
          }
          findMany: {
            args: Prisma.userActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>[]
          }
          create: {
            args: Prisma.userActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>
          }
          createMany: {
            args: Prisma.userActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>[]
          }
          delete: {
            args: Prisma.userActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>
          }
          update: {
            args: Prisma.userActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>
          }
          deleteMany: {
            args: Prisma.userActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>[]
          }
          upsert: {
            args: Prisma.userActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userActivityPayload>
          }
          aggregate: {
            args: Prisma.UserActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserActivity>
          }
          groupBy: {
            args: Prisma.userActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.userActivityCountArgs<ExtArgs>
            result: $Utils.Optional<UserActivityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    department?: DepartmentOmit
    semester?: SemesterOmit
    course?: CourseOmit
    resource?: ResourceOmit
    blackListedToken?: BlackListedTokenOmit
    userActivity?: userActivityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userActivities: number
    Resource: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userActivities?: boolean | UserCountOutputTypeCountUserActivitiesArgs
    Resource?: boolean | UserCountOutputTypeCountResourceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    semesters: number
    resources: number
    courses: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semesters?: boolean | DepartmentCountOutputTypeCountSemestersArgs
    resources?: boolean | DepartmentCountOutputTypeCountResourcesArgs
    courses?: boolean | DepartmentCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountSemestersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type SemesterCountOutputType
   */

  export type SemesterCountOutputType = {
    courses: number
  }

  export type SemesterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | SemesterCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterCountOutputType
     */
    select?: SemesterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    userActivities: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userActivities?: boolean | ResourceCountOutputTypeCountUserActivitiesArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountUserActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    userActivities?: boolean | User$userActivitiesArgs<ExtArgs>
    Resource?: boolean | User$ResourceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userActivities?: boolean | User$userActivitiesArgs<ExtArgs>
    Resource?: boolean | User$ResourceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userActivities: Prisma.$userActivityPayload<ExtArgs>[]
      Resource: Prisma.$ResourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userActivities<T extends User$userActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$userActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Resource<T extends User$ResourceArgs<ExtArgs> = {}>(args?: Subset<T, User$ResourceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userActivities
   */
  export type User$userActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    where?: userActivityWhereInput
    orderBy?: userActivityOrderByWithRelationInput | userActivityOrderByWithRelationInput[]
    cursor?: userActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * User.Resource
   */
  export type User$ResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    tags: number
    createdAt: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    tags?: true
    createdAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    name: string
    tags: string[]
    createdAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tags?: boolean
    createdAt?: boolean
    semesters?: boolean | Department$semestersArgs<ExtArgs>
    resources?: boolean | Department$resourcesArgs<ExtArgs>
    courses?: boolean | Department$coursesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tags?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tags?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    tags?: boolean
    createdAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tags" | "createdAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semesters?: boolean | Department$semestersArgs<ExtArgs>
    resources?: boolean | Department$resourcesArgs<ExtArgs>
    courses?: boolean | Department$coursesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      semesters: Prisma.$SemesterPayload<ExtArgs>[]
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tags: string[]
      createdAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    semesters<T extends Department$semestersArgs<ExtArgs> = {}>(args?: Subset<T, Department$semestersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resources<T extends Department$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Department$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends Department$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Department$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'Int'>
    readonly name: FieldRef<"Department", 'String'>
    readonly tags: FieldRef<"Department", 'String[]'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.semesters
   */
  export type Department$semestersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    cursor?: SemesterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Department.resources
   */
  export type Department$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Department.courses
   */
  export type Department$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Semester
   */

  export type AggregateSemester = {
    _count: SemesterCountAggregateOutputType | null
    _avg: SemesterAvgAggregateOutputType | null
    _sum: SemesterSumAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  export type SemesterAvgAggregateOutputType = {
    id: number | null
    Number: number | null
    departmentId: number | null
  }

  export type SemesterSumAggregateOutputType = {
    id: number | null
    Number: number | null
    departmentId: number | null
  }

  export type SemesterMinAggregateOutputType = {
    id: number | null
    Number: number | null
    departmentId: number | null
    createdAt: Date | null
  }

  export type SemesterMaxAggregateOutputType = {
    id: number | null
    Number: number | null
    departmentId: number | null
    createdAt: Date | null
  }

  export type SemesterCountAggregateOutputType = {
    id: number
    Number: number
    departmentId: number
    createdAt: number
    _all: number
  }


  export type SemesterAvgAggregateInputType = {
    id?: true
    Number?: true
    departmentId?: true
  }

  export type SemesterSumAggregateInputType = {
    id?: true
    Number?: true
    departmentId?: true
  }

  export type SemesterMinAggregateInputType = {
    id?: true
    Number?: true
    departmentId?: true
    createdAt?: true
  }

  export type SemesterMaxAggregateInputType = {
    id?: true
    Number?: true
    departmentId?: true
    createdAt?: true
  }

  export type SemesterCountAggregateInputType = {
    id?: true
    Number?: true
    departmentId?: true
    createdAt?: true
    _all?: true
  }

  export type SemesterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semester to aggregate.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Semesters
    **/
    _count?: true | SemesterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SemesterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SemesterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemesterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemesterMaxAggregateInputType
  }

  export type GetSemesterAggregateType<T extends SemesterAggregateArgs> = {
        [P in keyof T & keyof AggregateSemester]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemester[P]>
      : GetScalarType<T[P], AggregateSemester[P]>
  }




  export type SemesterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByWithAggregationInput | SemesterOrderByWithAggregationInput[]
    by: SemesterScalarFieldEnum[] | SemesterScalarFieldEnum
    having?: SemesterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemesterCountAggregateInputType | true
    _avg?: SemesterAvgAggregateInputType
    _sum?: SemesterSumAggregateInputType
    _min?: SemesterMinAggregateInputType
    _max?: SemesterMaxAggregateInputType
  }

  export type SemesterGroupByOutputType = {
    id: number
    Number: number
    departmentId: number
    createdAt: Date
    _count: SemesterCountAggregateOutputType | null
    _avg: SemesterAvgAggregateOutputType | null
    _sum: SemesterSumAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  type GetSemesterGroupByPayload<T extends SemesterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemesterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemesterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemesterGroupByOutputType[P]>
            : GetScalarType<T[P], SemesterGroupByOutputType[P]>
        }
      >
    >


  export type SemesterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Number?: boolean
    departmentId?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    courses?: boolean | Semester$coursesArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Number?: boolean
    departmentId?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Number?: boolean
    departmentId?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectScalar = {
    id?: boolean
    Number?: boolean
    departmentId?: boolean
    createdAt?: boolean
  }

  export type SemesterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Number" | "departmentId" | "createdAt", ExtArgs["result"]["semester"]>
  export type SemesterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    courses?: boolean | Semester$coursesArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SemesterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type SemesterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $SemesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Semester"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Number: number
      departmentId: number
      createdAt: Date
    }, ExtArgs["result"]["semester"]>
    composites: {}
  }

  type SemesterGetPayload<S extends boolean | null | undefined | SemesterDefaultArgs> = $Result.GetResult<Prisma.$SemesterPayload, S>

  type SemesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SemesterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SemesterCountAggregateInputType | true
    }

  export interface SemesterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Semester'], meta: { name: 'Semester' } }
    /**
     * Find zero or one Semester that matches the filter.
     * @param {SemesterFindUniqueArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SemesterFindUniqueArgs>(args: SelectSubset<T, SemesterFindUniqueArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Semester that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SemesterFindUniqueOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SemesterFindUniqueOrThrowArgs>(args: SelectSubset<T, SemesterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SemesterFindFirstArgs>(args?: SelectSubset<T, SemesterFindFirstArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SemesterFindFirstOrThrowArgs>(args?: SelectSubset<T, SemesterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Semesters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semesters
     * const semesters = await prisma.semester.findMany()
     * 
     * // Get first 10 Semesters
     * const semesters = await prisma.semester.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const semesterWithIdOnly = await prisma.semester.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SemesterFindManyArgs>(args?: SelectSubset<T, SemesterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Semester.
     * @param {SemesterCreateArgs} args - Arguments to create a Semester.
     * @example
     * // Create one Semester
     * const Semester = await prisma.semester.create({
     *   data: {
     *     // ... data to create a Semester
     *   }
     * })
     * 
     */
    create<T extends SemesterCreateArgs>(args: SelectSubset<T, SemesterCreateArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Semesters.
     * @param {SemesterCreateManyArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SemesterCreateManyArgs>(args?: SelectSubset<T, SemesterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Semesters and returns the data saved in the database.
     * @param {SemesterCreateManyAndReturnArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Semesters and only return the `id`
     * const semesterWithIdOnly = await prisma.semester.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SemesterCreateManyAndReturnArgs>(args?: SelectSubset<T, SemesterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Semester.
     * @param {SemesterDeleteArgs} args - Arguments to delete one Semester.
     * @example
     * // Delete one Semester
     * const Semester = await prisma.semester.delete({
     *   where: {
     *     // ... filter to delete one Semester
     *   }
     * })
     * 
     */
    delete<T extends SemesterDeleteArgs>(args: SelectSubset<T, SemesterDeleteArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Semester.
     * @param {SemesterUpdateArgs} args - Arguments to update one Semester.
     * @example
     * // Update one Semester
     * const semester = await prisma.semester.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SemesterUpdateArgs>(args: SelectSubset<T, SemesterUpdateArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Semesters.
     * @param {SemesterDeleteManyArgs} args - Arguments to filter Semesters to delete.
     * @example
     * // Delete a few Semesters
     * const { count } = await prisma.semester.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SemesterDeleteManyArgs>(args?: SelectSubset<T, SemesterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SemesterUpdateManyArgs>(args: SelectSubset<T, SemesterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters and returns the data updated in the database.
     * @param {SemesterUpdateManyAndReturnArgs} args - Arguments to update many Semesters.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Semesters and only return the `id`
     * const semesterWithIdOnly = await prisma.semester.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SemesterUpdateManyAndReturnArgs>(args: SelectSubset<T, SemesterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Semester.
     * @param {SemesterUpsertArgs} args - Arguments to update or create a Semester.
     * @example
     * // Update or create a Semester
     * const semester = await prisma.semester.upsert({
     *   create: {
     *     // ... data to create a Semester
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semester we want to update
     *   }
     * })
     */
    upsert<T extends SemesterUpsertArgs>(args: SelectSubset<T, SemesterUpsertArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterCountArgs} args - Arguments to filter Semesters to count.
     * @example
     * // Count the number of Semesters
     * const count = await prisma.semester.count({
     *   where: {
     *     // ... the filter for the Semesters we want to count
     *   }
     * })
    **/
    count<T extends SemesterCountArgs>(
      args?: Subset<T, SemesterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemesterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SemesterAggregateArgs>(args: Subset<T, SemesterAggregateArgs>): Prisma.PrismaPromise<GetSemesterAggregateType<T>>

    /**
     * Group by Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SemesterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SemesterGroupByArgs['orderBy'] }
        : { orderBy?: SemesterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SemesterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemesterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Semester model
   */
  readonly fields: SemesterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Semester.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SemesterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courses<T extends Semester$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Semester$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Semester model
   */
  interface SemesterFieldRefs {
    readonly id: FieldRef<"Semester", 'Int'>
    readonly Number: FieldRef<"Semester", 'Int'>
    readonly departmentId: FieldRef<"Semester", 'Int'>
    readonly createdAt: FieldRef<"Semester", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Semester findUnique
   */
  export type SemesterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester findUniqueOrThrow
   */
  export type SemesterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester findFirst
   */
  export type SemesterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester findFirstOrThrow
   */
  export type SemesterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester findMany
   */
  export type SemesterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semesters to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester create
   */
  export type SemesterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to create a Semester.
     */
    data: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
  }

  /**
   * Semester createMany
   */
  export type SemesterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Semester createManyAndReturn
   */
  export type SemesterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Semester update
   */
  export type SemesterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to update a Semester.
     */
    data: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
    /**
     * Choose, which Semester to update.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester updateMany
   */
  export type SemesterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to update.
     */
    limit?: number
  }

  /**
   * Semester updateManyAndReturn
   */
  export type SemesterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Semester upsert
   */
  export type SemesterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The filter to search for the Semester to update in case it exists.
     */
    where: SemesterWhereUniqueInput
    /**
     * In case the Semester found by the `where` argument doesn't exist, create a new Semester with this data.
     */
    create: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
    /**
     * In case the Semester was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
  }

  /**
   * Semester delete
   */
  export type SemesterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter which Semester to delete.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester deleteMany
   */
  export type SemesterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semesters to delete
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to delete.
     */
    limit?: number
  }

  /**
   * Semester.courses
   */
  export type Semester$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Semester without action
   */
  export type SemesterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    semesterId: number | null
    departmentId: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    semesterId: number | null
    departmentId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    name: string | null
    semesterId: number | null
    departmentId: number | null
    createdAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    semesterId: number | null
    departmentId: number | null
    createdAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    semesterId: number
    departmentId: number
    createdAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    semesterId?: true
    departmentId?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    semesterId?: true
    departmentId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    semesterId?: true
    departmentId?: true
    createdAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    semesterId?: true
    departmentId?: true
    createdAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    semesterId?: true
    departmentId?: true
    createdAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    name: string
    semesterId: number
    departmentId: number
    createdAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    semesterId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    semesterId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    semesterId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    semesterId?: boolean
    departmentId?: boolean
    createdAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "semesterId" | "departmentId" | "createdAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      semester: Prisma.$SemesterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      semesterId: number
      departmentId: number
      createdAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    semester<T extends SemesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterDefaultArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly name: FieldRef<"Course", 'String'>
    readonly semesterId: FieldRef<"Course", 'Int'>
    readonly departmentId: FieldRef<"Course", 'Int'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    id: number | null
    departmentId: number | null
    userId: number | null
  }

  export type ResourceSumAggregateOutputType = {
    id: number | null
    departmentId: number | null
    userId: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: number | null
    name: string | null
    File: string | null
    image: string | null
    publishStatus: $Enums.PublishStatus | null
    departmentId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    File: string | null
    image: string | null
    publishStatus: $Enums.PublishStatus | null
    departmentId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    name: number
    File: number
    image: number
    publishStatus: number
    departmentId: number
    userId: number
    createdAt: number
    tags: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    id?: true
    departmentId?: true
    userId?: true
  }

  export type ResourceSumAggregateInputType = {
    id?: true
    departmentId?: true
    userId?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    name?: true
    File?: true
    image?: true
    publishStatus?: true
    departmentId?: true
    userId?: true
    createdAt?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    name?: true
    File?: true
    image?: true
    publishStatus?: true
    departmentId?: true
    userId?: true
    createdAt?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    name?: true
    File?: true
    image?: true
    publishStatus?: true
    departmentId?: true
    userId?: true
    createdAt?: true
    tags?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: number
    name: string
    File: string | null
    image: string | null
    publishStatus: $Enums.PublishStatus
    departmentId: number
    userId: number
    createdAt: Date
    tags: string[]
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    File?: boolean
    image?: boolean
    publishStatus?: boolean
    departmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    tags?: boolean
    userActivities?: boolean | Resource$userActivitiesArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    File?: boolean
    image?: boolean
    publishStatus?: boolean
    departmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    tags?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    File?: boolean
    image?: boolean
    publishStatus?: boolean
    departmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    tags?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    name?: boolean
    File?: boolean
    image?: boolean
    publishStatus?: boolean
    departmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    tags?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "File" | "image" | "publishStatus" | "departmentId" | "userId" | "createdAt" | "tags", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userActivities?: boolean | Resource$userActivitiesArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      userActivities: Prisma.$userActivityPayload<ExtArgs>[]
      department: Prisma.$DepartmentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      File: string | null
      image: string | null
      publishStatus: $Enums.PublishStatus
      departmentId: number
      userId: number
      createdAt: Date
      tags: string[]
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userActivities<T extends Resource$userActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, Resource$userActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'Int'>
    readonly name: FieldRef<"Resource", 'String'>
    readonly File: FieldRef<"Resource", 'String'>
    readonly image: FieldRef<"Resource", 'String'>
    readonly publishStatus: FieldRef<"Resource", 'PublishStatus'>
    readonly departmentId: FieldRef<"Resource", 'Int'>
    readonly userId: FieldRef<"Resource", 'Int'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
    readonly tags: FieldRef<"Resource", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource.userActivities
   */
  export type Resource$userActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    where?: userActivityWhereInput
    orderBy?: userActivityOrderByWithRelationInput | userActivityOrderByWithRelationInput[]
    cursor?: userActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model BlackListedToken
   */

  export type AggregateBlackListedToken = {
    _count: BlackListedTokenCountAggregateOutputType | null
    _avg: BlackListedTokenAvgAggregateOutputType | null
    _sum: BlackListedTokenSumAggregateOutputType | null
    _min: BlackListedTokenMinAggregateOutputType | null
    _max: BlackListedTokenMaxAggregateOutputType | null
  }

  export type BlackListedTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type BlackListedTokenSumAggregateOutputType = {
    id: number | null
  }

  export type BlackListedTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    createdAt: Date | null
  }

  export type BlackListedTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    createdAt: Date | null
  }

  export type BlackListedTokenCountAggregateOutputType = {
    id: number
    token: number
    createdAt: number
    _all: number
  }


  export type BlackListedTokenAvgAggregateInputType = {
    id?: true
  }

  export type BlackListedTokenSumAggregateInputType = {
    id?: true
  }

  export type BlackListedTokenMinAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
  }

  export type BlackListedTokenMaxAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
  }

  export type BlackListedTokenCountAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    _all?: true
  }

  export type BlackListedTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlackListedToken to aggregate.
     */
    where?: BlackListedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackListedTokens to fetch.
     */
    orderBy?: BlackListedTokenOrderByWithRelationInput | BlackListedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlackListedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackListedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackListedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlackListedTokens
    **/
    _count?: true | BlackListedTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlackListedTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlackListedTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlackListedTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlackListedTokenMaxAggregateInputType
  }

  export type GetBlackListedTokenAggregateType<T extends BlackListedTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateBlackListedToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlackListedToken[P]>
      : GetScalarType<T[P], AggregateBlackListedToken[P]>
  }




  export type BlackListedTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlackListedTokenWhereInput
    orderBy?: BlackListedTokenOrderByWithAggregationInput | BlackListedTokenOrderByWithAggregationInput[]
    by: BlackListedTokenScalarFieldEnum[] | BlackListedTokenScalarFieldEnum
    having?: BlackListedTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlackListedTokenCountAggregateInputType | true
    _avg?: BlackListedTokenAvgAggregateInputType
    _sum?: BlackListedTokenSumAggregateInputType
    _min?: BlackListedTokenMinAggregateInputType
    _max?: BlackListedTokenMaxAggregateInputType
  }

  export type BlackListedTokenGroupByOutputType = {
    id: number
    token: string
    createdAt: Date
    _count: BlackListedTokenCountAggregateOutputType | null
    _avg: BlackListedTokenAvgAggregateOutputType | null
    _sum: BlackListedTokenSumAggregateOutputType | null
    _min: BlackListedTokenMinAggregateOutputType | null
    _max: BlackListedTokenMaxAggregateOutputType | null
  }

  type GetBlackListedTokenGroupByPayload<T extends BlackListedTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlackListedTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlackListedTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlackListedTokenGroupByOutputType[P]>
            : GetScalarType<T[P], BlackListedTokenGroupByOutputType[P]>
        }
      >
    >


  export type BlackListedTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blackListedToken"]>

  export type BlackListedTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blackListedToken"]>

  export type BlackListedTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blackListedToken"]>

  export type BlackListedTokenSelectScalar = {
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }

  export type BlackListedTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "createdAt", ExtArgs["result"]["blackListedToken"]>

  export type $BlackListedTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlackListedToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      createdAt: Date
    }, ExtArgs["result"]["blackListedToken"]>
    composites: {}
  }

  type BlackListedTokenGetPayload<S extends boolean | null | undefined | BlackListedTokenDefaultArgs> = $Result.GetResult<Prisma.$BlackListedTokenPayload, S>

  type BlackListedTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlackListedTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlackListedTokenCountAggregateInputType | true
    }

  export interface BlackListedTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlackListedToken'], meta: { name: 'BlackListedToken' } }
    /**
     * Find zero or one BlackListedToken that matches the filter.
     * @param {BlackListedTokenFindUniqueArgs} args - Arguments to find a BlackListedToken
     * @example
     * // Get one BlackListedToken
     * const blackListedToken = await prisma.blackListedToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlackListedTokenFindUniqueArgs>(args: SelectSubset<T, BlackListedTokenFindUniqueArgs<ExtArgs>>): Prisma__BlackListedTokenClient<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlackListedToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlackListedTokenFindUniqueOrThrowArgs} args - Arguments to find a BlackListedToken
     * @example
     * // Get one BlackListedToken
     * const blackListedToken = await prisma.blackListedToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlackListedTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, BlackListedTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlackListedTokenClient<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlackListedToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackListedTokenFindFirstArgs} args - Arguments to find a BlackListedToken
     * @example
     * // Get one BlackListedToken
     * const blackListedToken = await prisma.blackListedToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlackListedTokenFindFirstArgs>(args?: SelectSubset<T, BlackListedTokenFindFirstArgs<ExtArgs>>): Prisma__BlackListedTokenClient<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlackListedToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackListedTokenFindFirstOrThrowArgs} args - Arguments to find a BlackListedToken
     * @example
     * // Get one BlackListedToken
     * const blackListedToken = await prisma.blackListedToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlackListedTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, BlackListedTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlackListedTokenClient<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlackListedTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackListedTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlackListedTokens
     * const blackListedTokens = await prisma.blackListedToken.findMany()
     * 
     * // Get first 10 BlackListedTokens
     * const blackListedTokens = await prisma.blackListedToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blackListedTokenWithIdOnly = await prisma.blackListedToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlackListedTokenFindManyArgs>(args?: SelectSubset<T, BlackListedTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlackListedToken.
     * @param {BlackListedTokenCreateArgs} args - Arguments to create a BlackListedToken.
     * @example
     * // Create one BlackListedToken
     * const BlackListedToken = await prisma.blackListedToken.create({
     *   data: {
     *     // ... data to create a BlackListedToken
     *   }
     * })
     * 
     */
    create<T extends BlackListedTokenCreateArgs>(args: SelectSubset<T, BlackListedTokenCreateArgs<ExtArgs>>): Prisma__BlackListedTokenClient<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlackListedTokens.
     * @param {BlackListedTokenCreateManyArgs} args - Arguments to create many BlackListedTokens.
     * @example
     * // Create many BlackListedTokens
     * const blackListedToken = await prisma.blackListedToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlackListedTokenCreateManyArgs>(args?: SelectSubset<T, BlackListedTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlackListedTokens and returns the data saved in the database.
     * @param {BlackListedTokenCreateManyAndReturnArgs} args - Arguments to create many BlackListedTokens.
     * @example
     * // Create many BlackListedTokens
     * const blackListedToken = await prisma.blackListedToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlackListedTokens and only return the `id`
     * const blackListedTokenWithIdOnly = await prisma.blackListedToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlackListedTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, BlackListedTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlackListedToken.
     * @param {BlackListedTokenDeleteArgs} args - Arguments to delete one BlackListedToken.
     * @example
     * // Delete one BlackListedToken
     * const BlackListedToken = await prisma.blackListedToken.delete({
     *   where: {
     *     // ... filter to delete one BlackListedToken
     *   }
     * })
     * 
     */
    delete<T extends BlackListedTokenDeleteArgs>(args: SelectSubset<T, BlackListedTokenDeleteArgs<ExtArgs>>): Prisma__BlackListedTokenClient<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlackListedToken.
     * @param {BlackListedTokenUpdateArgs} args - Arguments to update one BlackListedToken.
     * @example
     * // Update one BlackListedToken
     * const blackListedToken = await prisma.blackListedToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlackListedTokenUpdateArgs>(args: SelectSubset<T, BlackListedTokenUpdateArgs<ExtArgs>>): Prisma__BlackListedTokenClient<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlackListedTokens.
     * @param {BlackListedTokenDeleteManyArgs} args - Arguments to filter BlackListedTokens to delete.
     * @example
     * // Delete a few BlackListedTokens
     * const { count } = await prisma.blackListedToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlackListedTokenDeleteManyArgs>(args?: SelectSubset<T, BlackListedTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlackListedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackListedTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlackListedTokens
     * const blackListedToken = await prisma.blackListedToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlackListedTokenUpdateManyArgs>(args: SelectSubset<T, BlackListedTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlackListedTokens and returns the data updated in the database.
     * @param {BlackListedTokenUpdateManyAndReturnArgs} args - Arguments to update many BlackListedTokens.
     * @example
     * // Update many BlackListedTokens
     * const blackListedToken = await prisma.blackListedToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlackListedTokens and only return the `id`
     * const blackListedTokenWithIdOnly = await prisma.blackListedToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlackListedTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, BlackListedTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlackListedToken.
     * @param {BlackListedTokenUpsertArgs} args - Arguments to update or create a BlackListedToken.
     * @example
     * // Update or create a BlackListedToken
     * const blackListedToken = await prisma.blackListedToken.upsert({
     *   create: {
     *     // ... data to create a BlackListedToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlackListedToken we want to update
     *   }
     * })
     */
    upsert<T extends BlackListedTokenUpsertArgs>(args: SelectSubset<T, BlackListedTokenUpsertArgs<ExtArgs>>): Prisma__BlackListedTokenClient<$Result.GetResult<Prisma.$BlackListedTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlackListedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackListedTokenCountArgs} args - Arguments to filter BlackListedTokens to count.
     * @example
     * // Count the number of BlackListedTokens
     * const count = await prisma.blackListedToken.count({
     *   where: {
     *     // ... the filter for the BlackListedTokens we want to count
     *   }
     * })
    **/
    count<T extends BlackListedTokenCountArgs>(
      args?: Subset<T, BlackListedTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlackListedTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlackListedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackListedTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlackListedTokenAggregateArgs>(args: Subset<T, BlackListedTokenAggregateArgs>): Prisma.PrismaPromise<GetBlackListedTokenAggregateType<T>>

    /**
     * Group by BlackListedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackListedTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlackListedTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlackListedTokenGroupByArgs['orderBy'] }
        : { orderBy?: BlackListedTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlackListedTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlackListedTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlackListedToken model
   */
  readonly fields: BlackListedTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlackListedToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlackListedTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlackListedToken model
   */
  interface BlackListedTokenFieldRefs {
    readonly id: FieldRef<"BlackListedToken", 'Int'>
    readonly token: FieldRef<"BlackListedToken", 'String'>
    readonly createdAt: FieldRef<"BlackListedToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlackListedToken findUnique
   */
  export type BlackListedTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlackListedToken to fetch.
     */
    where: BlackListedTokenWhereUniqueInput
  }

  /**
   * BlackListedToken findUniqueOrThrow
   */
  export type BlackListedTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlackListedToken to fetch.
     */
    where: BlackListedTokenWhereUniqueInput
  }

  /**
   * BlackListedToken findFirst
   */
  export type BlackListedTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlackListedToken to fetch.
     */
    where?: BlackListedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackListedTokens to fetch.
     */
    orderBy?: BlackListedTokenOrderByWithRelationInput | BlackListedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlackListedTokens.
     */
    cursor?: BlackListedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackListedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackListedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlackListedTokens.
     */
    distinct?: BlackListedTokenScalarFieldEnum | BlackListedTokenScalarFieldEnum[]
  }

  /**
   * BlackListedToken findFirstOrThrow
   */
  export type BlackListedTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlackListedToken to fetch.
     */
    where?: BlackListedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackListedTokens to fetch.
     */
    orderBy?: BlackListedTokenOrderByWithRelationInput | BlackListedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlackListedTokens.
     */
    cursor?: BlackListedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackListedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackListedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlackListedTokens.
     */
    distinct?: BlackListedTokenScalarFieldEnum | BlackListedTokenScalarFieldEnum[]
  }

  /**
   * BlackListedToken findMany
   */
  export type BlackListedTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlackListedTokens to fetch.
     */
    where?: BlackListedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackListedTokens to fetch.
     */
    orderBy?: BlackListedTokenOrderByWithRelationInput | BlackListedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlackListedTokens.
     */
    cursor?: BlackListedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackListedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackListedTokens.
     */
    skip?: number
    distinct?: BlackListedTokenScalarFieldEnum | BlackListedTokenScalarFieldEnum[]
  }

  /**
   * BlackListedToken create
   */
  export type BlackListedTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a BlackListedToken.
     */
    data: XOR<BlackListedTokenCreateInput, BlackListedTokenUncheckedCreateInput>
  }

  /**
   * BlackListedToken createMany
   */
  export type BlackListedTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlackListedTokens.
     */
    data: BlackListedTokenCreateManyInput | BlackListedTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlackListedToken createManyAndReturn
   */
  export type BlackListedTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * The data used to create many BlackListedTokens.
     */
    data: BlackListedTokenCreateManyInput | BlackListedTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlackListedToken update
   */
  export type BlackListedTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a BlackListedToken.
     */
    data: XOR<BlackListedTokenUpdateInput, BlackListedTokenUncheckedUpdateInput>
    /**
     * Choose, which BlackListedToken to update.
     */
    where: BlackListedTokenWhereUniqueInput
  }

  /**
   * BlackListedToken updateMany
   */
  export type BlackListedTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlackListedTokens.
     */
    data: XOR<BlackListedTokenUpdateManyMutationInput, BlackListedTokenUncheckedUpdateManyInput>
    /**
     * Filter which BlackListedTokens to update
     */
    where?: BlackListedTokenWhereInput
    /**
     * Limit how many BlackListedTokens to update.
     */
    limit?: number
  }

  /**
   * BlackListedToken updateManyAndReturn
   */
  export type BlackListedTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * The data used to update BlackListedTokens.
     */
    data: XOR<BlackListedTokenUpdateManyMutationInput, BlackListedTokenUncheckedUpdateManyInput>
    /**
     * Filter which BlackListedTokens to update
     */
    where?: BlackListedTokenWhereInput
    /**
     * Limit how many BlackListedTokens to update.
     */
    limit?: number
  }

  /**
   * BlackListedToken upsert
   */
  export type BlackListedTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the BlackListedToken to update in case it exists.
     */
    where: BlackListedTokenWhereUniqueInput
    /**
     * In case the BlackListedToken found by the `where` argument doesn't exist, create a new BlackListedToken with this data.
     */
    create: XOR<BlackListedTokenCreateInput, BlackListedTokenUncheckedCreateInput>
    /**
     * In case the BlackListedToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlackListedTokenUpdateInput, BlackListedTokenUncheckedUpdateInput>
  }

  /**
   * BlackListedToken delete
   */
  export type BlackListedTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
    /**
     * Filter which BlackListedToken to delete.
     */
    where: BlackListedTokenWhereUniqueInput
  }

  /**
   * BlackListedToken deleteMany
   */
  export type BlackListedTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlackListedTokens to delete
     */
    where?: BlackListedTokenWhereInput
    /**
     * Limit how many BlackListedTokens to delete.
     */
    limit?: number
  }

  /**
   * BlackListedToken without action
   */
  export type BlackListedTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackListedToken
     */
    select?: BlackListedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackListedToken
     */
    omit?: BlackListedTokenOmit<ExtArgs> | null
  }


  /**
   * Model userActivity
   */

  export type AggregateUserActivity = {
    _count: UserActivityCountAggregateOutputType | null
    _avg: UserActivityAvgAggregateOutputType | null
    _sum: UserActivitySumAggregateOutputType | null
    _min: UserActivityMinAggregateOutputType | null
    _max: UserActivityMaxAggregateOutputType | null
  }

  export type UserActivityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    resourceId: number | null
  }

  export type UserActivitySumAggregateOutputType = {
    id: number | null
    userId: number | null
    resourceId: number | null
  }

  export type UserActivityMinAggregateOutputType = {
    id: number | null
    type: $Enums.ActivityType | null
    userId: number | null
    resourceId: number | null
    createdAt: Date | null
  }

  export type UserActivityMaxAggregateOutputType = {
    id: number | null
    type: $Enums.ActivityType | null
    userId: number | null
    resourceId: number | null
    createdAt: Date | null
  }

  export type UserActivityCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    resourceId: number
    createdAt: number
    _all: number
  }


  export type UserActivityAvgAggregateInputType = {
    id?: true
    userId?: true
    resourceId?: true
  }

  export type UserActivitySumAggregateInputType = {
    id?: true
    userId?: true
    resourceId?: true
  }

  export type UserActivityMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    resourceId?: true
    createdAt?: true
  }

  export type UserActivityMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    resourceId?: true
    createdAt?: true
  }

  export type UserActivityCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    resourceId?: true
    createdAt?: true
    _all?: true
  }

  export type UserActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userActivity to aggregate.
     */
    where?: userActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userActivities to fetch.
     */
    orderBy?: userActivityOrderByWithRelationInput | userActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userActivities
    **/
    _count?: true | UserActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserActivityMaxAggregateInputType
  }

  export type GetUserActivityAggregateType<T extends UserActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserActivity[P]>
      : GetScalarType<T[P], AggregateUserActivity[P]>
  }




  export type userActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userActivityWhereInput
    orderBy?: userActivityOrderByWithAggregationInput | userActivityOrderByWithAggregationInput[]
    by: UserActivityScalarFieldEnum[] | UserActivityScalarFieldEnum
    having?: userActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserActivityCountAggregateInputType | true
    _avg?: UserActivityAvgAggregateInputType
    _sum?: UserActivitySumAggregateInputType
    _min?: UserActivityMinAggregateInputType
    _max?: UserActivityMaxAggregateInputType
  }

  export type UserActivityGroupByOutputType = {
    id: number
    type: $Enums.ActivityType
    userId: number
    resourceId: number
    createdAt: Date
    _count: UserActivityCountAggregateOutputType | null
    _avg: UserActivityAvgAggregateOutputType | null
    _sum: UserActivitySumAggregateOutputType | null
    _min: UserActivityMinAggregateOutputType | null
    _max: UserActivityMaxAggregateOutputType | null
  }

  type GetUserActivityGroupByPayload<T extends userActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserActivityGroupByOutputType[P]>
            : GetScalarType<T[P], UserActivityGroupByOutputType[P]>
        }
      >
    >


  export type userActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    resourceId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type userActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    resourceId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type userActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    resourceId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type userActivitySelectScalar = {
    id?: boolean
    type?: boolean
    userId?: boolean
    resourceId?: boolean
    createdAt?: boolean
  }

  export type userActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "userId" | "resourceId" | "createdAt", ExtArgs["result"]["userActivity"]>
  export type userActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type userActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type userActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }

  export type $userActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resource: Prisma.$ResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.ActivityType
      userId: number
      resourceId: number
      createdAt: Date
    }, ExtArgs["result"]["userActivity"]>
    composites: {}
  }

  type userActivityGetPayload<S extends boolean | null | undefined | userActivityDefaultArgs> = $Result.GetResult<Prisma.$userActivityPayload, S>

  type userActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserActivityCountAggregateInputType | true
    }

  export interface userActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userActivity'], meta: { name: 'userActivity' } }
    /**
     * Find zero or one UserActivity that matches the filter.
     * @param {userActivityFindUniqueArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userActivityFindUniqueArgs>(args: SelectSubset<T, userActivityFindUniqueArgs<ExtArgs>>): Prisma__userActivityClient<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userActivityFindUniqueOrThrowArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, userActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userActivityClient<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userActivityFindFirstArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userActivityFindFirstArgs>(args?: SelectSubset<T, userActivityFindFirstArgs<ExtArgs>>): Prisma__userActivityClient<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userActivityFindFirstOrThrowArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, userActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__userActivityClient<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserActivities
     * const userActivities = await prisma.userActivity.findMany()
     * 
     * // Get first 10 UserActivities
     * const userActivities = await prisma.userActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userActivityWithIdOnly = await prisma.userActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userActivityFindManyArgs>(args?: SelectSubset<T, userActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserActivity.
     * @param {userActivityCreateArgs} args - Arguments to create a UserActivity.
     * @example
     * // Create one UserActivity
     * const UserActivity = await prisma.userActivity.create({
     *   data: {
     *     // ... data to create a UserActivity
     *   }
     * })
     * 
     */
    create<T extends userActivityCreateArgs>(args: SelectSubset<T, userActivityCreateArgs<ExtArgs>>): Prisma__userActivityClient<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserActivities.
     * @param {userActivityCreateManyArgs} args - Arguments to create many UserActivities.
     * @example
     * // Create many UserActivities
     * const userActivity = await prisma.userActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userActivityCreateManyArgs>(args?: SelectSubset<T, userActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserActivities and returns the data saved in the database.
     * @param {userActivityCreateManyAndReturnArgs} args - Arguments to create many UserActivities.
     * @example
     * // Create many UserActivities
     * const userActivity = await prisma.userActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserActivities and only return the `id`
     * const userActivityWithIdOnly = await prisma.userActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, userActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserActivity.
     * @param {userActivityDeleteArgs} args - Arguments to delete one UserActivity.
     * @example
     * // Delete one UserActivity
     * const UserActivity = await prisma.userActivity.delete({
     *   where: {
     *     // ... filter to delete one UserActivity
     *   }
     * })
     * 
     */
    delete<T extends userActivityDeleteArgs>(args: SelectSubset<T, userActivityDeleteArgs<ExtArgs>>): Prisma__userActivityClient<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserActivity.
     * @param {userActivityUpdateArgs} args - Arguments to update one UserActivity.
     * @example
     * // Update one UserActivity
     * const userActivity = await prisma.userActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userActivityUpdateArgs>(args: SelectSubset<T, userActivityUpdateArgs<ExtArgs>>): Prisma__userActivityClient<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserActivities.
     * @param {userActivityDeleteManyArgs} args - Arguments to filter UserActivities to delete.
     * @example
     * // Delete a few UserActivities
     * const { count } = await prisma.userActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userActivityDeleteManyArgs>(args?: SelectSubset<T, userActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserActivities
     * const userActivity = await prisma.userActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userActivityUpdateManyArgs>(args: SelectSubset<T, userActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActivities and returns the data updated in the database.
     * @param {userActivityUpdateManyAndReturnArgs} args - Arguments to update many UserActivities.
     * @example
     * // Update many UserActivities
     * const userActivity = await prisma.userActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserActivities and only return the `id`
     * const userActivityWithIdOnly = await prisma.userActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, userActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserActivity.
     * @param {userActivityUpsertArgs} args - Arguments to update or create a UserActivity.
     * @example
     * // Update or create a UserActivity
     * const userActivity = await prisma.userActivity.upsert({
     *   create: {
     *     // ... data to create a UserActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserActivity we want to update
     *   }
     * })
     */
    upsert<T extends userActivityUpsertArgs>(args: SelectSubset<T, userActivityUpsertArgs<ExtArgs>>): Prisma__userActivityClient<$Result.GetResult<Prisma.$userActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userActivityCountArgs} args - Arguments to filter UserActivities to count.
     * @example
     * // Count the number of UserActivities
     * const count = await prisma.userActivity.count({
     *   where: {
     *     // ... the filter for the UserActivities we want to count
     *   }
     * })
    **/
    count<T extends userActivityCountArgs>(
      args?: Subset<T, userActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserActivityAggregateArgs>(args: Subset<T, UserActivityAggregateArgs>): Prisma.PrismaPromise<GetUserActivityAggregateType<T>>

    /**
     * Group by UserActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userActivityGroupByArgs['orderBy'] }
        : { orderBy?: userActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userActivity model
   */
  readonly fields: userActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userActivity model
   */
  interface userActivityFieldRefs {
    readonly id: FieldRef<"userActivity", 'Int'>
    readonly type: FieldRef<"userActivity", 'ActivityType'>
    readonly userId: FieldRef<"userActivity", 'Int'>
    readonly resourceId: FieldRef<"userActivity", 'Int'>
    readonly createdAt: FieldRef<"userActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * userActivity findUnique
   */
  export type userActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * Filter, which userActivity to fetch.
     */
    where: userActivityWhereUniqueInput
  }

  /**
   * userActivity findUniqueOrThrow
   */
  export type userActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * Filter, which userActivity to fetch.
     */
    where: userActivityWhereUniqueInput
  }

  /**
   * userActivity findFirst
   */
  export type userActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * Filter, which userActivity to fetch.
     */
    where?: userActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userActivities to fetch.
     */
    orderBy?: userActivityOrderByWithRelationInput | userActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userActivities.
     */
    cursor?: userActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * userActivity findFirstOrThrow
   */
  export type userActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * Filter, which userActivity to fetch.
     */
    where?: userActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userActivities to fetch.
     */
    orderBy?: userActivityOrderByWithRelationInput | userActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userActivities.
     */
    cursor?: userActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * userActivity findMany
   */
  export type userActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * Filter, which userActivities to fetch.
     */
    where?: userActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userActivities to fetch.
     */
    orderBy?: userActivityOrderByWithRelationInput | userActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userActivities.
     */
    cursor?: userActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userActivities.
     */
    skip?: number
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * userActivity create
   */
  export type userActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a userActivity.
     */
    data: XOR<userActivityCreateInput, userActivityUncheckedCreateInput>
  }

  /**
   * userActivity createMany
   */
  export type userActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userActivities.
     */
    data: userActivityCreateManyInput | userActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userActivity createManyAndReturn
   */
  export type userActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * The data used to create many userActivities.
     */
    data: userActivityCreateManyInput | userActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userActivity update
   */
  export type userActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a userActivity.
     */
    data: XOR<userActivityUpdateInput, userActivityUncheckedUpdateInput>
    /**
     * Choose, which userActivity to update.
     */
    where: userActivityWhereUniqueInput
  }

  /**
   * userActivity updateMany
   */
  export type userActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userActivities.
     */
    data: XOR<userActivityUpdateManyMutationInput, userActivityUncheckedUpdateManyInput>
    /**
     * Filter which userActivities to update
     */
    where?: userActivityWhereInput
    /**
     * Limit how many userActivities to update.
     */
    limit?: number
  }

  /**
   * userActivity updateManyAndReturn
   */
  export type userActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * The data used to update userActivities.
     */
    data: XOR<userActivityUpdateManyMutationInput, userActivityUncheckedUpdateManyInput>
    /**
     * Filter which userActivities to update
     */
    where?: userActivityWhereInput
    /**
     * Limit how many userActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * userActivity upsert
   */
  export type userActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the userActivity to update in case it exists.
     */
    where: userActivityWhereUniqueInput
    /**
     * In case the userActivity found by the `where` argument doesn't exist, create a new userActivity with this data.
     */
    create: XOR<userActivityCreateInput, userActivityUncheckedCreateInput>
    /**
     * In case the userActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userActivityUpdateInput, userActivityUncheckedUpdateInput>
  }

  /**
   * userActivity delete
   */
  export type userActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
    /**
     * Filter which userActivity to delete.
     */
    where: userActivityWhereUniqueInput
  }

  /**
   * userActivity deleteMany
   */
  export type userActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userActivities to delete
     */
    where?: userActivityWhereInput
    /**
     * Limit how many userActivities to delete.
     */
    limit?: number
  }

  /**
   * userActivity without action
   */
  export type userActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userActivity
     */
    select?: userActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the userActivity
     */
    omit?: userActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userActivityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tags: 'tags',
    createdAt: 'createdAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const SemesterScalarFieldEnum: {
    id: 'id',
    Number: 'Number',
    departmentId: 'departmentId',
    createdAt: 'createdAt'
  };

  export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    semesterId: 'semesterId',
    departmentId: 'departmentId',
    createdAt: 'createdAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    File: 'File',
    image: 'image',
    publishStatus: 'publishStatus',
    departmentId: 'departmentId',
    userId: 'userId',
    createdAt: 'createdAt',
    tags: 'tags'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const BlackListedTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    createdAt: 'createdAt'
  };

  export type BlackListedTokenScalarFieldEnum = (typeof BlackListedTokenScalarFieldEnum)[keyof typeof BlackListedTokenScalarFieldEnum]


  export const UserActivityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    resourceId: 'resourceId',
    createdAt: 'createdAt'
  };

  export type UserActivityScalarFieldEnum = (typeof UserActivityScalarFieldEnum)[keyof typeof UserActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PublishStatus'
   */
  export type EnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus'>
    


  /**
   * Reference to a field of type 'PublishStatus[]'
   */
  export type ListEnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    userActivities?: UserActivityListRelationFilter
    Resource?: ResourceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    userActivities?: userActivityOrderByRelationAggregateInput
    Resource?: ResourceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    userActivities?: UserActivityListRelationFilter
    Resource?: ResourceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    tags?: StringNullableListFilter<"Department">
    createdAt?: DateTimeFilter<"Department"> | Date | string
    semesters?: SemesterListRelationFilter
    resources?: ResourceListRelationFilter
    courses?: CourseListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    semesters?: SemesterOrderByRelationAggregateInput
    resources?: ResourceOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    tags?: StringNullableListFilter<"Department">
    createdAt?: DateTimeFilter<"Department"> | Date | string
    semesters?: SemesterListRelationFilter
    resources?: ResourceListRelationFilter
    courses?: CourseListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Department"> | number
    name?: StringWithAggregatesFilter<"Department"> | string
    tags?: StringNullableListFilter<"Department">
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type SemesterWhereInput = {
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    id?: IntFilter<"Semester"> | number
    Number?: IntFilter<"Semester"> | number
    departmentId?: IntFilter<"Semester"> | number
    createdAt?: DateTimeFilter<"Semester"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    courses?: CourseListRelationFilter
  }

  export type SemesterOrderByWithRelationInput = {
    id?: SortOrder
    Number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type SemesterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    Number?: IntFilter<"Semester"> | number
    departmentId?: IntFilter<"Semester"> | number
    createdAt?: DateTimeFilter<"Semester"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    courses?: CourseListRelationFilter
  }, "id">

  export type SemesterOrderByWithAggregationInput = {
    id?: SortOrder
    Number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    _count?: SemesterCountOrderByAggregateInput
    _avg?: SemesterAvgOrderByAggregateInput
    _max?: SemesterMaxOrderByAggregateInput
    _min?: SemesterMinOrderByAggregateInput
    _sum?: SemesterSumOrderByAggregateInput
  }

  export type SemesterScalarWhereWithAggregatesInput = {
    AND?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    OR?: SemesterScalarWhereWithAggregatesInput[]
    NOT?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Semester"> | number
    Number?: IntWithAggregatesFilter<"Semester"> | number
    departmentId?: IntWithAggregatesFilter<"Semester"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Semester"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    semesterId?: IntFilter<"Course"> | number
    departmentId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    semester?: SemesterOrderByWithRelationInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    semesterId?: IntFilter<"Course"> | number
    departmentId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    name?: StringWithAggregatesFilter<"Course"> | string
    semesterId?: IntWithAggregatesFilter<"Course"> | number
    departmentId?: IntWithAggregatesFilter<"Course"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: IntFilter<"Resource"> | number
    name?: StringFilter<"Resource"> | string
    File?: StringNullableFilter<"Resource"> | string | null
    image?: StringNullableFilter<"Resource"> | string | null
    publishStatus?: EnumPublishStatusFilter<"Resource"> | $Enums.PublishStatus
    departmentId?: IntFilter<"Resource"> | number
    userId?: IntFilter<"Resource"> | number
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    tags?: StringNullableListFilter<"Resource">
    userActivities?: UserActivityListRelationFilter
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    File?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    publishStatus?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    tags?: SortOrder
    userActivities?: userActivityOrderByRelationAggregateInput
    department?: DepartmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    name?: StringFilter<"Resource"> | string
    File?: StringNullableFilter<"Resource"> | string | null
    image?: StringNullableFilter<"Resource"> | string | null
    publishStatus?: EnumPublishStatusFilter<"Resource"> | $Enums.PublishStatus
    departmentId?: IntFilter<"Resource"> | number
    userId?: IntFilter<"Resource"> | number
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    tags?: StringNullableListFilter<"Resource">
    userActivities?: UserActivityListRelationFilter
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    File?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    publishStatus?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    tags?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resource"> | number
    name?: StringWithAggregatesFilter<"Resource"> | string
    File?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    image?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    publishStatus?: EnumPublishStatusWithAggregatesFilter<"Resource"> | $Enums.PublishStatus
    departmentId?: IntWithAggregatesFilter<"Resource"> | number
    userId?: IntWithAggregatesFilter<"Resource"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    tags?: StringNullableListFilter<"Resource">
  }

  export type BlackListedTokenWhereInput = {
    AND?: BlackListedTokenWhereInput | BlackListedTokenWhereInput[]
    OR?: BlackListedTokenWhereInput[]
    NOT?: BlackListedTokenWhereInput | BlackListedTokenWhereInput[]
    id?: IntFilter<"BlackListedToken"> | number
    token?: StringFilter<"BlackListedToken"> | string
    createdAt?: DateTimeFilter<"BlackListedToken"> | Date | string
  }

  export type BlackListedTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlackListedTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: BlackListedTokenWhereInput | BlackListedTokenWhereInput[]
    OR?: BlackListedTokenWhereInput[]
    NOT?: BlackListedTokenWhereInput | BlackListedTokenWhereInput[]
    createdAt?: DateTimeFilter<"BlackListedToken"> | Date | string
  }, "id" | "token">

  export type BlackListedTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    _count?: BlackListedTokenCountOrderByAggregateInput
    _avg?: BlackListedTokenAvgOrderByAggregateInput
    _max?: BlackListedTokenMaxOrderByAggregateInput
    _min?: BlackListedTokenMinOrderByAggregateInput
    _sum?: BlackListedTokenSumOrderByAggregateInput
  }

  export type BlackListedTokenScalarWhereWithAggregatesInput = {
    AND?: BlackListedTokenScalarWhereWithAggregatesInput | BlackListedTokenScalarWhereWithAggregatesInput[]
    OR?: BlackListedTokenScalarWhereWithAggregatesInput[]
    NOT?: BlackListedTokenScalarWhereWithAggregatesInput | BlackListedTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlackListedToken"> | number
    token?: StringWithAggregatesFilter<"BlackListedToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlackListedToken"> | Date | string
  }

  export type userActivityWhereInput = {
    AND?: userActivityWhereInput | userActivityWhereInput[]
    OR?: userActivityWhereInput[]
    NOT?: userActivityWhereInput | userActivityWhereInput[]
    id?: IntFilter<"userActivity"> | number
    type?: EnumActivityTypeFilter<"userActivity"> | $Enums.ActivityType
    userId?: IntFilter<"userActivity"> | number
    resourceId?: IntFilter<"userActivity"> | number
    createdAt?: DateTimeFilter<"userActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }

  export type userActivityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
  }

  export type userActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userActivityWhereInput | userActivityWhereInput[]
    OR?: userActivityWhereInput[]
    NOT?: userActivityWhereInput | userActivityWhereInput[]
    type?: EnumActivityTypeFilter<"userActivity"> | $Enums.ActivityType
    userId?: IntFilter<"userActivity"> | number
    resourceId?: IntFilter<"userActivity"> | number
    createdAt?: DateTimeFilter<"userActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }, "id">

  export type userActivityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
    _count?: userActivityCountOrderByAggregateInput
    _avg?: userActivityAvgOrderByAggregateInput
    _max?: userActivityMaxOrderByAggregateInput
    _min?: userActivityMinOrderByAggregateInput
    _sum?: userActivitySumOrderByAggregateInput
  }

  export type userActivityScalarWhereWithAggregatesInput = {
    AND?: userActivityScalarWhereWithAggregatesInput | userActivityScalarWhereWithAggregatesInput[]
    OR?: userActivityScalarWhereWithAggregatesInput[]
    NOT?: userActivityScalarWhereWithAggregatesInput | userActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userActivity"> | number
    type?: EnumActivityTypeWithAggregatesFilter<"userActivity"> | $Enums.ActivityType
    userId?: IntWithAggregatesFilter<"userActivity"> | number
    resourceId?: IntWithAggregatesFilter<"userActivity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"userActivity"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    userActivities?: userActivityCreateNestedManyWithoutUserInput
    Resource?: ResourceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    userActivities?: userActivityUncheckedCreateNestedManyWithoutUserInput
    Resource?: ResourceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivities?: userActivityUpdateManyWithoutUserNestedInput
    Resource?: ResourceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivities?: userActivityUncheckedUpdateManyWithoutUserNestedInput
    Resource?: ResourceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
    semesters?: SemesterCreateNestedManyWithoutDepartmentInput
    resources?: ResourceCreateNestedManyWithoutDepartmentInput
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: number
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
    semesters?: SemesterUncheckedCreateNestedManyWithoutDepartmentInput
    resources?: ResourceUncheckedCreateNestedManyWithoutDepartmentInput
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    semesters?: SemesterUpdateManyWithoutDepartmentNestedInput
    resources?: ResourceUpdateManyWithoutDepartmentNestedInput
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    semesters?: SemesterUncheckedUpdateManyWithoutDepartmentNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutDepartmentNestedInput
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: number
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SemesterCreateInput = {
    Number: number
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutSemestersInput
    courses?: CourseCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateInput = {
    id?: number
    Number: number
    departmentId: number
    createdAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUpdateInput = {
    Number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutSemestersNestedInput
    courses?: CourseUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Number?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterCreateManyInput = {
    id?: number
    Number: number
    departmentId: number
    createdAt?: Date | string
  }

  export type SemesterUpdateManyMutationInput = {
    Number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SemesterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Number?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    name: string
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    semester: SemesterCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    name: string
    semesterId: number
    departmentId: number
    createdAt?: Date | string
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    semester?: SemesterUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyInput = {
    id?: number
    name: string
    semesterId: number
    departmentId: number
    createdAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateInput = {
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
    userActivities?: userActivityCreateNestedManyWithoutResourceInput
    department: DepartmentCreateNestedOneWithoutResourcesInput
    user: UserCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: number
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    departmentId: number
    userId: number
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
    userActivities?: userActivityUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
    userActivities?: userActivityUpdateManyWithoutResourceNestedInput
    department?: DepartmentUpdateOneRequiredWithoutResourcesNestedInput
    user?: UserUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    departmentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
    userActivities?: userActivityUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyInput = {
    id?: number
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    departmentId: number
    userId: number
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
  }

  export type ResourceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    departmentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
  }

  export type BlackListedTokenCreateInput = {
    token: string
    createdAt?: Date | string
  }

  export type BlackListedTokenUncheckedCreateInput = {
    id?: number
    token: string
    createdAt?: Date | string
  }

  export type BlackListedTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackListedTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackListedTokenCreateManyInput = {
    id?: number
    token: string
    createdAt?: Date | string
  }

  export type BlackListedTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackListedTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userActivityCreateInput = {
    type: $Enums.ActivityType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserActivitiesInput
    resource: ResourceCreateNestedOneWithoutUserActivitiesInput
  }

  export type userActivityUncheckedCreateInput = {
    id?: number
    type: $Enums.ActivityType
    userId: number
    resourceId: number
    createdAt?: Date | string
  }

  export type userActivityUpdateInput = {
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserActivitiesNestedInput
    resource?: ResourceUpdateOneRequiredWithoutUserActivitiesNestedInput
  }

  export type userActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    userId?: IntFieldUpdateOperationsInput | number
    resourceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userActivityCreateManyInput = {
    id?: number
    type: $Enums.ActivityType
    userId: number
    resourceId: number
    createdAt?: Date | string
  }

  export type userActivityUpdateManyMutationInput = {
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    userId?: IntFieldUpdateOperationsInput | number
    resourceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserActivityListRelationFilter = {
    every?: userActivityWhereInput
    some?: userActivityWhereInput
    none?: userActivityWhereInput
  }

  export type ResourceListRelationFilter = {
    every?: ResourceWhereInput
    some?: ResourceWhereInput
    none?: ResourceWhereInput
  }

  export type userActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SemesterListRelationFilter = {
    every?: SemesterWhereInput
    some?: SemesterWhereInput
    none?: SemesterWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type SemesterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type SemesterCountOrderByAggregateInput = {
    id?: SortOrder
    Number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type SemesterAvgOrderByAggregateInput = {
    id?: SortOrder
    Number?: SortOrder
    departmentId?: SortOrder
  }

  export type SemesterMaxOrderByAggregateInput = {
    id?: SortOrder
    Number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type SemesterMinOrderByAggregateInput = {
    id?: SortOrder
    Number?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type SemesterSumOrderByAggregateInput = {
    id?: SortOrder
    Number?: SortOrder
    departmentId?: SortOrder
  }

  export type SemesterScalarRelationFilter = {
    is?: SemesterWhereInput
    isNot?: SemesterWhereInput
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    semesterId?: SortOrder
    departmentId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    semesterId?: SortOrder
    departmentId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    File?: SortOrder
    image?: SortOrder
    publishStatus?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    tags?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    File?: SortOrder
    image?: SortOrder
    publishStatus?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    File?: SortOrder
    image?: SortOrder
    publishStatus?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type BlackListedTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlackListedTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlackListedTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlackListedTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlackListedTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type ResourceScalarRelationFilter = {
    is?: ResourceWhereInput
    isNot?: ResourceWhereInput
  }

  export type userActivityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type userActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resourceId?: SortOrder
  }

  export type userActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type userActivityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type userActivitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resourceId?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type userActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<userActivityCreateWithoutUserInput, userActivityUncheckedCreateWithoutUserInput> | userActivityCreateWithoutUserInput[] | userActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userActivityCreateOrConnectWithoutUserInput | userActivityCreateOrConnectWithoutUserInput[]
    createMany?: userActivityCreateManyUserInputEnvelope
    connect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
  }

  export type ResourceCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type userActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userActivityCreateWithoutUserInput, userActivityUncheckedCreateWithoutUserInput> | userActivityCreateWithoutUserInput[] | userActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userActivityCreateOrConnectWithoutUserInput | userActivityCreateOrConnectWithoutUserInput[]
    createMany?: userActivityCreateManyUserInputEnvelope
    connect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<userActivityCreateWithoutUserInput, userActivityUncheckedCreateWithoutUserInput> | userActivityCreateWithoutUserInput[] | userActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userActivityCreateOrConnectWithoutUserInput | userActivityCreateOrConnectWithoutUserInput[]
    upsert?: userActivityUpsertWithWhereUniqueWithoutUserInput | userActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userActivityCreateManyUserInputEnvelope
    set?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    disconnect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    delete?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    connect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    update?: userActivityUpdateWithWhereUniqueWithoutUserInput | userActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userActivityUpdateManyWithWhereWithoutUserInput | userActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userActivityScalarWhereInput | userActivityScalarWhereInput[]
  }

  export type ResourceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutUserInput | ResourceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutUserInput | ResourceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutUserInput | ResourceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userActivityCreateWithoutUserInput, userActivityUncheckedCreateWithoutUserInput> | userActivityCreateWithoutUserInput[] | userActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userActivityCreateOrConnectWithoutUserInput | userActivityCreateOrConnectWithoutUserInput[]
    upsert?: userActivityUpsertWithWhereUniqueWithoutUserInput | userActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userActivityCreateManyUserInputEnvelope
    set?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    disconnect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    delete?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    connect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    update?: userActivityUpdateWithWhereUniqueWithoutUserInput | userActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userActivityUpdateManyWithWhereWithoutUserInput | userActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userActivityScalarWhereInput | userActivityScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutUserInput | ResourceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutUserInput | ResourceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutUserInput | ResourceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type DepartmentCreatetagsInput = {
    set: string[]
  }

  export type SemesterCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SemesterCreateWithoutDepartmentInput, SemesterUncheckedCreateWithoutDepartmentInput> | SemesterCreateWithoutDepartmentInput[] | SemesterUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SemesterCreateOrConnectWithoutDepartmentInput | SemesterCreateOrConnectWithoutDepartmentInput[]
    createMany?: SemesterCreateManyDepartmentInputEnvelope
    connect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
  }

  export type ResourceCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ResourceCreateWithoutDepartmentInput, ResourceUncheckedCreateWithoutDepartmentInput> | ResourceCreateWithoutDepartmentInput[] | ResourceUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutDepartmentInput | ResourceCreateOrConnectWithoutDepartmentInput[]
    createMany?: ResourceCreateManyDepartmentInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type SemesterUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SemesterCreateWithoutDepartmentInput, SemesterUncheckedCreateWithoutDepartmentInput> | SemesterCreateWithoutDepartmentInput[] | SemesterUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SemesterCreateOrConnectWithoutDepartmentInput | SemesterCreateOrConnectWithoutDepartmentInput[]
    createMany?: SemesterCreateManyDepartmentInputEnvelope
    connect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ResourceCreateWithoutDepartmentInput, ResourceUncheckedCreateWithoutDepartmentInput> | ResourceCreateWithoutDepartmentInput[] | ResourceUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutDepartmentInput | ResourceCreateOrConnectWithoutDepartmentInput[]
    createMany?: ResourceCreateManyDepartmentInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type DepartmentUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SemesterUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SemesterCreateWithoutDepartmentInput, SemesterUncheckedCreateWithoutDepartmentInput> | SemesterCreateWithoutDepartmentInput[] | SemesterUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SemesterCreateOrConnectWithoutDepartmentInput | SemesterCreateOrConnectWithoutDepartmentInput[]
    upsert?: SemesterUpsertWithWhereUniqueWithoutDepartmentInput | SemesterUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SemesterCreateManyDepartmentInputEnvelope
    set?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    disconnect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    delete?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    connect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    update?: SemesterUpdateWithWhereUniqueWithoutDepartmentInput | SemesterUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SemesterUpdateManyWithWhereWithoutDepartmentInput | SemesterUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SemesterScalarWhereInput | SemesterScalarWhereInput[]
  }

  export type ResourceUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ResourceCreateWithoutDepartmentInput, ResourceUncheckedCreateWithoutDepartmentInput> | ResourceCreateWithoutDepartmentInput[] | ResourceUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutDepartmentInput | ResourceCreateOrConnectWithoutDepartmentInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutDepartmentInput | ResourceUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ResourceCreateManyDepartmentInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutDepartmentInput | ResourceUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutDepartmentInput | ResourceUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type SemesterUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SemesterCreateWithoutDepartmentInput, SemesterUncheckedCreateWithoutDepartmentInput> | SemesterCreateWithoutDepartmentInput[] | SemesterUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SemesterCreateOrConnectWithoutDepartmentInput | SemesterCreateOrConnectWithoutDepartmentInput[]
    upsert?: SemesterUpsertWithWhereUniqueWithoutDepartmentInput | SemesterUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SemesterCreateManyDepartmentInputEnvelope
    set?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    disconnect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    delete?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    connect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    update?: SemesterUpdateWithWhereUniqueWithoutDepartmentInput | SemesterUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SemesterUpdateManyWithWhereWithoutDepartmentInput | SemesterUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SemesterScalarWhereInput | SemesterScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ResourceCreateWithoutDepartmentInput, ResourceUncheckedCreateWithoutDepartmentInput> | ResourceCreateWithoutDepartmentInput[] | ResourceUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutDepartmentInput | ResourceCreateOrConnectWithoutDepartmentInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutDepartmentInput | ResourceUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ResourceCreateManyDepartmentInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutDepartmentInput | ResourceUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutDepartmentInput | ResourceUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutSemestersInput = {
    create?: XOR<DepartmentCreateWithoutSemestersInput, DepartmentUncheckedCreateWithoutSemestersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSemestersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type CourseCreateNestedManyWithoutSemesterInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    createMany?: CourseCreateManySemesterInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    createMany?: CourseCreateManySemesterInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutSemestersNestedInput = {
    create?: XOR<DepartmentCreateWithoutSemestersInput, DepartmentUncheckedCreateWithoutSemestersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSemestersInput
    upsert?: DepartmentUpsertWithoutSemestersInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutSemestersInput, DepartmentUpdateWithoutSemestersInput>, DepartmentUncheckedUpdateWithoutSemestersInput>
  }

  export type CourseUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutSemesterInput | CourseUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: CourseCreateManySemesterInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutSemesterInput | CourseUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutSemesterInput | CourseUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutSemesterInput | CourseUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: CourseCreateManySemesterInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutSemesterInput | CourseUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutSemesterInput | CourseUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutCoursesInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type SemesterCreateNestedOneWithoutCoursesInput = {
    create?: XOR<SemesterCreateWithoutCoursesInput, SemesterUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutCoursesInput
    connect?: SemesterWhereUniqueInput
  }

  export type DepartmentUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    upsert?: DepartmentUpsertWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutCoursesInput, DepartmentUpdateWithoutCoursesInput>, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type SemesterUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<SemesterCreateWithoutCoursesInput, SemesterUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutCoursesInput
    upsert?: SemesterUpsertWithoutCoursesInput
    connect?: SemesterWhereUniqueInput
    update?: XOR<XOR<SemesterUpdateToOneWithWhereWithoutCoursesInput, SemesterUpdateWithoutCoursesInput>, SemesterUncheckedUpdateWithoutCoursesInput>
  }

  export type ResourceCreatetagsInput = {
    set: string[]
  }

  export type userActivityCreateNestedManyWithoutResourceInput = {
    create?: XOR<userActivityCreateWithoutResourceInput, userActivityUncheckedCreateWithoutResourceInput> | userActivityCreateWithoutResourceInput[] | userActivityUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: userActivityCreateOrConnectWithoutResourceInput | userActivityCreateOrConnectWithoutResourceInput[]
    createMany?: userActivityCreateManyResourceInputEnvelope
    connect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
  }

  export type DepartmentCreateNestedOneWithoutResourcesInput = {
    create?: XOR<DepartmentCreateWithoutResourcesInput, DepartmentUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutResourcesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResourceInput = {
    create?: XOR<UserCreateWithoutResourceInput, UserUncheckedCreateWithoutResourceInput>
    connectOrCreate?: UserCreateOrConnectWithoutResourceInput
    connect?: UserWhereUniqueInput
  }

  export type userActivityUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<userActivityCreateWithoutResourceInput, userActivityUncheckedCreateWithoutResourceInput> | userActivityCreateWithoutResourceInput[] | userActivityUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: userActivityCreateOrConnectWithoutResourceInput | userActivityCreateOrConnectWithoutResourceInput[]
    createMany?: userActivityCreateManyResourceInputEnvelope
    connect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPublishStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublishStatus
  }

  export type ResourceUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type userActivityUpdateManyWithoutResourceNestedInput = {
    create?: XOR<userActivityCreateWithoutResourceInput, userActivityUncheckedCreateWithoutResourceInput> | userActivityCreateWithoutResourceInput[] | userActivityUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: userActivityCreateOrConnectWithoutResourceInput | userActivityCreateOrConnectWithoutResourceInput[]
    upsert?: userActivityUpsertWithWhereUniqueWithoutResourceInput | userActivityUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: userActivityCreateManyResourceInputEnvelope
    set?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    disconnect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    delete?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    connect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    update?: userActivityUpdateWithWhereUniqueWithoutResourceInput | userActivityUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: userActivityUpdateManyWithWhereWithoutResourceInput | userActivityUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: userActivityScalarWhereInput | userActivityScalarWhereInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<DepartmentCreateWithoutResourcesInput, DepartmentUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutResourcesInput
    upsert?: DepartmentUpsertWithoutResourcesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutResourcesInput, DepartmentUpdateWithoutResourcesInput>, DepartmentUncheckedUpdateWithoutResourcesInput>
  }

  export type UserUpdateOneRequiredWithoutResourceNestedInput = {
    create?: XOR<UserCreateWithoutResourceInput, UserUncheckedCreateWithoutResourceInput>
    connectOrCreate?: UserCreateOrConnectWithoutResourceInput
    upsert?: UserUpsertWithoutResourceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResourceInput, UserUpdateWithoutResourceInput>, UserUncheckedUpdateWithoutResourceInput>
  }

  export type userActivityUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<userActivityCreateWithoutResourceInput, userActivityUncheckedCreateWithoutResourceInput> | userActivityCreateWithoutResourceInput[] | userActivityUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: userActivityCreateOrConnectWithoutResourceInput | userActivityCreateOrConnectWithoutResourceInput[]
    upsert?: userActivityUpsertWithWhereUniqueWithoutResourceInput | userActivityUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: userActivityCreateManyResourceInputEnvelope
    set?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    disconnect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    delete?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    connect?: userActivityWhereUniqueInput | userActivityWhereUniqueInput[]
    update?: userActivityUpdateWithWhereUniqueWithoutResourceInput | userActivityUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: userActivityUpdateManyWithWhereWithoutResourceInput | userActivityUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: userActivityScalarWhereInput | userActivityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserActivitiesInput = {
    create?: XOR<UserCreateWithoutUserActivitiesInput, UserUncheckedCreateWithoutUserActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutUserActivitiesInput = {
    create?: XOR<ResourceCreateWithoutUserActivitiesInput, ResourceUncheckedCreateWithoutUserActivitiesInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutUserActivitiesInput
    connect?: ResourceWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type UserUpdateOneRequiredWithoutUserActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutUserActivitiesInput, UserUncheckedCreateWithoutUserActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserActivitiesInput
    upsert?: UserUpsertWithoutUserActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserActivitiesInput, UserUpdateWithoutUserActivitiesInput>, UserUncheckedUpdateWithoutUserActivitiesInput>
  }

  export type ResourceUpdateOneRequiredWithoutUserActivitiesNestedInput = {
    create?: XOR<ResourceCreateWithoutUserActivitiesInput, ResourceUncheckedCreateWithoutUserActivitiesInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutUserActivitiesInput
    upsert?: ResourceUpsertWithoutUserActivitiesInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutUserActivitiesInput, ResourceUpdateWithoutUserActivitiesInput>, ResourceUncheckedUpdateWithoutUserActivitiesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }

  export type userActivityCreateWithoutUserInput = {
    type: $Enums.ActivityType
    createdAt?: Date | string
    resource: ResourceCreateNestedOneWithoutUserActivitiesInput
  }

  export type userActivityUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.ActivityType
    resourceId: number
    createdAt?: Date | string
  }

  export type userActivityCreateOrConnectWithoutUserInput = {
    where: userActivityWhereUniqueInput
    create: XOR<userActivityCreateWithoutUserInput, userActivityUncheckedCreateWithoutUserInput>
  }

  export type userActivityCreateManyUserInputEnvelope = {
    data: userActivityCreateManyUserInput | userActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResourceCreateWithoutUserInput = {
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
    userActivities?: userActivityCreateNestedManyWithoutResourceInput
    department: DepartmentCreateNestedOneWithoutResourcesInput
  }

  export type ResourceUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    departmentId: number
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
    userActivities?: userActivityUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutUserInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput>
  }

  export type ResourceCreateManyUserInputEnvelope = {
    data: ResourceCreateManyUserInput | ResourceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: userActivityWhereUniqueInput
    update: XOR<userActivityUpdateWithoutUserInput, userActivityUncheckedUpdateWithoutUserInput>
    create: XOR<userActivityCreateWithoutUserInput, userActivityUncheckedCreateWithoutUserInput>
  }

  export type userActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: userActivityWhereUniqueInput
    data: XOR<userActivityUpdateWithoutUserInput, userActivityUncheckedUpdateWithoutUserInput>
  }

  export type userActivityUpdateManyWithWhereWithoutUserInput = {
    where: userActivityScalarWhereInput
    data: XOR<userActivityUpdateManyMutationInput, userActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type userActivityScalarWhereInput = {
    AND?: userActivityScalarWhereInput | userActivityScalarWhereInput[]
    OR?: userActivityScalarWhereInput[]
    NOT?: userActivityScalarWhereInput | userActivityScalarWhereInput[]
    id?: IntFilter<"userActivity"> | number
    type?: EnumActivityTypeFilter<"userActivity"> | $Enums.ActivityType
    userId?: IntFilter<"userActivity"> | number
    resourceId?: IntFilter<"userActivity"> | number
    createdAt?: DateTimeFilter<"userActivity"> | Date | string
  }

  export type ResourceUpsertWithWhereUniqueWithoutUserInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutUserInput, ResourceUncheckedUpdateWithoutUserInput>
    create: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutUserInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutUserInput, ResourceUncheckedUpdateWithoutUserInput>
  }

  export type ResourceUpdateManyWithWhereWithoutUserInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutUserInput>
  }

  export type ResourceScalarWhereInput = {
    AND?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    OR?: ResourceScalarWhereInput[]
    NOT?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    id?: IntFilter<"Resource"> | number
    name?: StringFilter<"Resource"> | string
    File?: StringNullableFilter<"Resource"> | string | null
    image?: StringNullableFilter<"Resource"> | string | null
    publishStatus?: EnumPublishStatusFilter<"Resource"> | $Enums.PublishStatus
    departmentId?: IntFilter<"Resource"> | number
    userId?: IntFilter<"Resource"> | number
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    tags?: StringNullableListFilter<"Resource">
  }

  export type SemesterCreateWithoutDepartmentInput = {
    Number: number
    createdAt?: Date | string
    courses?: CourseCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateWithoutDepartmentInput = {
    id?: number
    Number: number
    createdAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterCreateOrConnectWithoutDepartmentInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutDepartmentInput, SemesterUncheckedCreateWithoutDepartmentInput>
  }

  export type SemesterCreateManyDepartmentInputEnvelope = {
    data: SemesterCreateManyDepartmentInput | SemesterCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type ResourceCreateWithoutDepartmentInput = {
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
    userActivities?: userActivityCreateNestedManyWithoutResourceInput
    user: UserCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    userId: number
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
    userActivities?: userActivityUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutDepartmentInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutDepartmentInput, ResourceUncheckedCreateWithoutDepartmentInput>
  }

  export type ResourceCreateManyDepartmentInputEnvelope = {
    data: ResourceCreateManyDepartmentInput | ResourceCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutDepartmentInput = {
    name: string
    createdAt?: Date | string
    semester: SemesterCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    semesterId: number
    createdAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseCreateManyDepartmentInputEnvelope = {
    data: CourseCreateManyDepartmentInput | CourseCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SemesterUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: SemesterWhereUniqueInput
    update: XOR<SemesterUpdateWithoutDepartmentInput, SemesterUncheckedUpdateWithoutDepartmentInput>
    create: XOR<SemesterCreateWithoutDepartmentInput, SemesterUncheckedCreateWithoutDepartmentInput>
  }

  export type SemesterUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: SemesterWhereUniqueInput
    data: XOR<SemesterUpdateWithoutDepartmentInput, SemesterUncheckedUpdateWithoutDepartmentInput>
  }

  export type SemesterUpdateManyWithWhereWithoutDepartmentInput = {
    where: SemesterScalarWhereInput
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type SemesterScalarWhereInput = {
    AND?: SemesterScalarWhereInput | SemesterScalarWhereInput[]
    OR?: SemesterScalarWhereInput[]
    NOT?: SemesterScalarWhereInput | SemesterScalarWhereInput[]
    id?: IntFilter<"Semester"> | number
    Number?: IntFilter<"Semester"> | number
    departmentId?: IntFilter<"Semester"> | number
    createdAt?: DateTimeFilter<"Semester"> | Date | string
  }

  export type ResourceUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutDepartmentInput, ResourceUncheckedUpdateWithoutDepartmentInput>
    create: XOR<ResourceCreateWithoutDepartmentInput, ResourceUncheckedCreateWithoutDepartmentInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutDepartmentInput, ResourceUncheckedUpdateWithoutDepartmentInput>
  }

  export type ResourceUpdateManyWithWhereWithoutDepartmentInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CourseUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
  }

  export type CourseUpdateManyWithWhereWithoutDepartmentInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    semesterId?: IntFilter<"Course"> | number
    departmentId?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type DepartmentCreateWithoutSemestersInput = {
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
    resources?: ResourceCreateNestedManyWithoutDepartmentInput
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutSemestersInput = {
    id?: number
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutDepartmentInput
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutSemestersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutSemestersInput, DepartmentUncheckedCreateWithoutSemestersInput>
  }

  export type CourseCreateWithoutSemesterInput = {
    name: string
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutSemesterInput = {
    id?: number
    name: string
    departmentId: number
    createdAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutSemesterInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput>
  }

  export type CourseCreateManySemesterInputEnvelope = {
    data: CourseCreateManySemesterInput | CourseCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutSemestersInput = {
    update: XOR<DepartmentUpdateWithoutSemestersInput, DepartmentUncheckedUpdateWithoutSemestersInput>
    create: XOR<DepartmentCreateWithoutSemestersInput, DepartmentUncheckedCreateWithoutSemestersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutSemestersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutSemestersInput, DepartmentUncheckedUpdateWithoutSemestersInput>
  }

  export type DepartmentUpdateWithoutSemestersInput = {
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUpdateManyWithoutDepartmentNestedInput
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutSemestersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutDepartmentNestedInput
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type CourseUpsertWithWhereUniqueWithoutSemesterInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutSemesterInput, CourseUncheckedUpdateWithoutSemesterInput>
    create: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutSemesterInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutSemesterInput, CourseUncheckedUpdateWithoutSemesterInput>
  }

  export type CourseUpdateManyWithWhereWithoutSemesterInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutSemesterInput>
  }

  export type DepartmentCreateWithoutCoursesInput = {
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
    semesters?: SemesterCreateNestedManyWithoutDepartmentInput
    resources?: ResourceCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
    semesters?: SemesterUncheckedCreateNestedManyWithoutDepartmentInput
    resources?: ResourceUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCoursesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
  }

  export type SemesterCreateWithoutCoursesInput = {
    Number: number
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutSemestersInput
  }

  export type SemesterUncheckedCreateWithoutCoursesInput = {
    id?: number
    Number: number
    departmentId: number
    createdAt?: Date | string
  }

  export type SemesterCreateOrConnectWithoutCoursesInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutCoursesInput, SemesterUncheckedCreateWithoutCoursesInput>
  }

  export type DepartmentUpsertWithoutCoursesInput = {
    update: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutCoursesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type DepartmentUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    semesters?: SemesterUpdateManyWithoutDepartmentNestedInput
    resources?: ResourceUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    semesters?: SemesterUncheckedUpdateManyWithoutDepartmentNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type SemesterUpsertWithoutCoursesInput = {
    update: XOR<SemesterUpdateWithoutCoursesInput, SemesterUncheckedUpdateWithoutCoursesInput>
    create: XOR<SemesterCreateWithoutCoursesInput, SemesterUncheckedCreateWithoutCoursesInput>
    where?: SemesterWhereInput
  }

  export type SemesterUpdateToOneWithWhereWithoutCoursesInput = {
    where?: SemesterWhereInput
    data: XOR<SemesterUpdateWithoutCoursesInput, SemesterUncheckedUpdateWithoutCoursesInput>
  }

  export type SemesterUpdateWithoutCoursesInput = {
    Number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutSemestersNestedInput
  }

  export type SemesterUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    Number?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userActivityCreateWithoutResourceInput = {
    type: $Enums.ActivityType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserActivitiesInput
  }

  export type userActivityUncheckedCreateWithoutResourceInput = {
    id?: number
    type: $Enums.ActivityType
    userId: number
    createdAt?: Date | string
  }

  export type userActivityCreateOrConnectWithoutResourceInput = {
    where: userActivityWhereUniqueInput
    create: XOR<userActivityCreateWithoutResourceInput, userActivityUncheckedCreateWithoutResourceInput>
  }

  export type userActivityCreateManyResourceInputEnvelope = {
    data: userActivityCreateManyResourceInput | userActivityCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutResourcesInput = {
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
    semesters?: SemesterCreateNestedManyWithoutDepartmentInput
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutResourcesInput = {
    id?: number
    name: string
    tags?: DepartmentCreatetagsInput | string[]
    createdAt?: Date | string
    semesters?: SemesterUncheckedCreateNestedManyWithoutDepartmentInput
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutResourcesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutResourcesInput, DepartmentUncheckedCreateWithoutResourcesInput>
  }

  export type UserCreateWithoutResourceInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    userActivities?: userActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResourceInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    userActivities?: userActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResourceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResourceInput, UserUncheckedCreateWithoutResourceInput>
  }

  export type userActivityUpsertWithWhereUniqueWithoutResourceInput = {
    where: userActivityWhereUniqueInput
    update: XOR<userActivityUpdateWithoutResourceInput, userActivityUncheckedUpdateWithoutResourceInput>
    create: XOR<userActivityCreateWithoutResourceInput, userActivityUncheckedCreateWithoutResourceInput>
  }

  export type userActivityUpdateWithWhereUniqueWithoutResourceInput = {
    where: userActivityWhereUniqueInput
    data: XOR<userActivityUpdateWithoutResourceInput, userActivityUncheckedUpdateWithoutResourceInput>
  }

  export type userActivityUpdateManyWithWhereWithoutResourceInput = {
    where: userActivityScalarWhereInput
    data: XOR<userActivityUpdateManyMutationInput, userActivityUncheckedUpdateManyWithoutResourceInput>
  }

  export type DepartmentUpsertWithoutResourcesInput = {
    update: XOR<DepartmentUpdateWithoutResourcesInput, DepartmentUncheckedUpdateWithoutResourcesInput>
    create: XOR<DepartmentCreateWithoutResourcesInput, DepartmentUncheckedCreateWithoutResourcesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutResourcesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutResourcesInput, DepartmentUncheckedUpdateWithoutResourcesInput>
  }

  export type DepartmentUpdateWithoutResourcesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    semesters?: SemesterUpdateManyWithoutDepartmentNestedInput
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tags?: DepartmentUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    semesters?: SemesterUncheckedUpdateManyWithoutDepartmentNestedInput
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type UserUpsertWithoutResourceInput = {
    update: XOR<UserUpdateWithoutResourceInput, UserUncheckedUpdateWithoutResourceInput>
    create: XOR<UserCreateWithoutResourceInput, UserUncheckedCreateWithoutResourceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResourceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResourceInput, UserUncheckedUpdateWithoutResourceInput>
  }

  export type UserUpdateWithoutResourceInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivities?: userActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userActivities?: userActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserActivitiesInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    Resource?: ResourceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserActivitiesInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    Resource?: ResourceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserActivitiesInput, UserUncheckedCreateWithoutUserActivitiesInput>
  }

  export type ResourceCreateWithoutUserActivitiesInput = {
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
    department: DepartmentCreateNestedOneWithoutResourcesInput
    user: UserCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutUserActivitiesInput = {
    id?: number
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    departmentId: number
    userId: number
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
  }

  export type ResourceCreateOrConnectWithoutUserActivitiesInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutUserActivitiesInput, ResourceUncheckedCreateWithoutUserActivitiesInput>
  }

  export type UserUpsertWithoutUserActivitiesInput = {
    update: XOR<UserUpdateWithoutUserActivitiesInput, UserUncheckedUpdateWithoutUserActivitiesInput>
    create: XOR<UserCreateWithoutUserActivitiesInput, UserUncheckedCreateWithoutUserActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserActivitiesInput, UserUncheckedUpdateWithoutUserActivitiesInput>
  }

  export type UserUpdateWithoutUserActivitiesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resource?: ResourceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resource?: ResourceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResourceUpsertWithoutUserActivitiesInput = {
    update: XOR<ResourceUpdateWithoutUserActivitiesInput, ResourceUncheckedUpdateWithoutUserActivitiesInput>
    create: XOR<ResourceCreateWithoutUserActivitiesInput, ResourceUncheckedCreateWithoutUserActivitiesInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutUserActivitiesInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutUserActivitiesInput, ResourceUncheckedUpdateWithoutUserActivitiesInput>
  }

  export type ResourceUpdateWithoutUserActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
    department?: DepartmentUpdateOneRequiredWithoutResourcesNestedInput
    user?: UserUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutUserActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    departmentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
  }

  export type userActivityCreateManyUserInput = {
    id?: number
    type: $Enums.ActivityType
    resourceId: number
    createdAt?: Date | string
  }

  export type ResourceCreateManyUserInput = {
    id?: number
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    departmentId: number
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
  }

  export type userActivityUpdateWithoutUserInput = {
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneRequiredWithoutUserActivitiesNestedInput
  }

  export type userActivityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    resourceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userActivityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    resourceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
    userActivities?: userActivityUpdateManyWithoutResourceNestedInput
    department?: DepartmentUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type ResourceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
    userActivities?: userActivityUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
  }

  export type SemesterCreateManyDepartmentInput = {
    id?: number
    Number: number
    createdAt?: Date | string
  }

  export type ResourceCreateManyDepartmentInput = {
    id?: number
    name: string
    File?: string | null
    image?: string | null
    publishStatus?: $Enums.PublishStatus
    userId: number
    createdAt?: Date | string
    tags?: ResourceCreatetagsInput | string[]
  }

  export type CourseCreateManyDepartmentInput = {
    id?: number
    name: string
    semesterId: number
    createdAt?: Date | string
  }

  export type SemesterUpdateWithoutDepartmentInput = {
    Number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    Number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    Number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
    userActivities?: userActivityUpdateManyWithoutResourceNestedInput
    user?: UserUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
    userActivities?: userActivityUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    File?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishStatus?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ResourceUpdatetagsInput | string[]
  }

  export type CourseUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    semester?: SemesterUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManySemesterInput = {
    id?: number
    name: string
    departmentId: number
    createdAt?: Date | string
  }

  export type CourseUpdateWithoutSemesterInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutSemesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyWithoutSemesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userActivityCreateManyResourceInput = {
    id?: number
    type: $Enums.ActivityType
    userId: number
    createdAt?: Date | string
  }

  export type userActivityUpdateWithoutResourceInput = {
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserActivitiesNestedInput
  }

  export type userActivityUncheckedUpdateWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userActivityUncheckedUpdateManyWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}