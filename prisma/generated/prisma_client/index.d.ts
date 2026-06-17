
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Visitation
 * 
 */
export type Visitation = $Result.DefaultSelection<Prisma.$VisitationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupsOnStudents
 * 
 */
export type GroupsOnStudents = $Result.DefaultSelection<Prisma.$GroupsOnStudentsPayload>
/**
 * Model List
 * 
 */
export type List = $Result.DefaultSelection<Prisma.$ListPayload>
/**
 * Model DayNotes
 * 
 */
export type DayNotes = $Result.DefaultSelection<Prisma.$DayNotesPayload>
/**
 * Model ListActivation
 * 
 */
export type ListActivation = $Result.DefaultSelection<Prisma.$ListActivationPayload>
/**
 * Model ExceptionsOnLists
 * 
 */
export type ExceptionsOnLists = $Result.DefaultSelection<Prisma.$ExceptionsOnListsPayload>
/**
 * Model Exception
 * 
 */
export type Exception = $Result.DefaultSelection<Prisma.$ExceptionPayload>
/**
 * Model SpecificDate
 * 
 */
export type SpecificDate = $Result.DefaultSelection<Prisma.$SpecificDatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const Role: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  DEFAULT: 'DEFAULT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RecordTime: {
  START: 'START',
  START_END: 'START_END'
};

export type RecordTime = (typeof RecordTime)[keyof typeof RecordTime]


export const TimeManagement: {
  LIST: 'LIST',
  STUDENT: 'STUDENT'
};

export type TimeManagement = (typeof TimeManagement)[keyof typeof TimeManagement]


export const ListStudentNotes: {
  NONE: 'NONE',
  MARKED: 'MARKED',
  SHORTENED: 'SHORTENED',
  FULL: 'FULL'
};

export type ListStudentNotes = (typeof ListStudentNotes)[keyof typeof ListStudentNotes]


export const ExceptionPresence: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT'
};

export type ExceptionPresence = (typeof ExceptionPresence)[keyof typeof ExceptionPresence]

}

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RecordTime = $Enums.RecordTime

export const RecordTime: typeof $Enums.RecordTime

export type TimeManagement = $Enums.TimeManagement

export const TimeManagement: typeof $Enums.TimeManagement

export type ListStudentNotes = $Enums.ListStudentNotes

export const ListStudentNotes: typeof $Enums.ListStudentNotes

export type ExceptionPresence = $Enums.ExceptionPresence

export const ExceptionPresence: typeof $Enums.ExceptionPresence

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.visitation`: Exposes CRUD operations for the **Visitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitations
    * const visitations = await prisma.visitation.findMany()
    * ```
    */
  get visitation(): Prisma.VisitationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.groupsOnStudents`: Exposes CRUD operations for the **GroupsOnStudents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupsOnStudents
    * const groupsOnStudents = await prisma.groupsOnStudents.findMany()
    * ```
    */
  get groupsOnStudents(): Prisma.GroupsOnStudentsDelegate<ExtArgs>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<ExtArgs>;

  /**
   * `prisma.dayNotes`: Exposes CRUD operations for the **DayNotes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayNotes
    * const dayNotes = await prisma.dayNotes.findMany()
    * ```
    */
  get dayNotes(): Prisma.DayNotesDelegate<ExtArgs>;

  /**
   * `prisma.listActivation`: Exposes CRUD operations for the **ListActivation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListActivations
    * const listActivations = await prisma.listActivation.findMany()
    * ```
    */
  get listActivation(): Prisma.ListActivationDelegate<ExtArgs>;

  /**
   * `prisma.exceptionsOnLists`: Exposes CRUD operations for the **ExceptionsOnLists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExceptionsOnLists
    * const exceptionsOnLists = await prisma.exceptionsOnLists.findMany()
    * ```
    */
  get exceptionsOnLists(): Prisma.ExceptionsOnListsDelegate<ExtArgs>;

  /**
   * `prisma.exception`: Exposes CRUD operations for the **Exception** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exceptions
    * const exceptions = await prisma.exception.findMany()
    * ```
    */
  get exception(): Prisma.ExceptionDelegate<ExtArgs>;

  /**
   * `prisma.specificDate`: Exposes CRUD operations for the **SpecificDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecificDates
    * const specificDates = await prisma.specificDate.findMany()
    * ```
    */
  get specificDate(): Prisma.SpecificDateDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Student: 'Student',
    Attendance: 'Attendance',
    Visitation: 'Visitation',
    User: 'User',
    Group: 'Group',
    GroupsOnStudents: 'GroupsOnStudents',
    List: 'List',
    DayNotes: 'DayNotes',
    ListActivation: 'ListActivation',
    ExceptionsOnLists: 'ExceptionsOnLists',
    Exception: 'Exception',
    SpecificDate: 'SpecificDate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'student' | 'attendance' | 'visitation' | 'user' | 'group' | 'groupsOnStudents' | 'list' | 'dayNotes' | 'listActivation' | 'exceptionsOnLists' | 'exception' | 'specificDate'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>,
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Visitation: {
        payload: Prisma.$VisitationPayload<ExtArgs>
        fields: Prisma.VisitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload>
          }
          findFirst: {
            args: Prisma.VisitationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload>
          }
          findMany: {
            args: Prisma.VisitationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload>[]
          }
          create: {
            args: Prisma.VisitationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload>
          }
          createMany: {
            args: Prisma.VisitationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VisitationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload>
          }
          update: {
            args: Prisma.VisitationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload>
          }
          deleteMany: {
            args: Prisma.VisitationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VisitationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VisitationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitationPayload>
          }
          aggregate: {
            args: Prisma.VisitationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVisitation>
          }
          groupBy: {
            args: Prisma.VisitationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VisitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitationCountArgs<ExtArgs>,
            result: $Utils.Optional<VisitationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupsOnStudents: {
        payload: Prisma.$GroupsOnStudentsPayload<ExtArgs>
        fields: Prisma.GroupsOnStudentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupsOnStudentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupsOnStudentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload>
          }
          findFirst: {
            args: Prisma.GroupsOnStudentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupsOnStudentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload>
          }
          findMany: {
            args: Prisma.GroupsOnStudentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload>[]
          }
          create: {
            args: Prisma.GroupsOnStudentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload>
          }
          createMany: {
            args: Prisma.GroupsOnStudentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupsOnStudentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload>
          }
          update: {
            args: Prisma.GroupsOnStudentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload>
          }
          deleteMany: {
            args: Prisma.GroupsOnStudentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupsOnStudentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupsOnStudentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupsOnStudentsPayload>
          }
          aggregate: {
            args: Prisma.GroupsOnStudentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupsOnStudents>
          }
          groupBy: {
            args: Prisma.GroupsOnStudentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupsOnStudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupsOnStudentsCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupsOnStudentsCountAggregateOutputType> | number
          }
        }
      }
      List: {
        payload: Prisma.$ListPayload<ExtArgs>
        fields: Prisma.ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findFirst: {
            args: Prisma.ListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findMany: {
            args: Prisma.ListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          create: {
            args: Prisma.ListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          createMany: {
            args: Prisma.ListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          update: {
            args: Prisma.ListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          deleteMany: {
            args: Prisma.ListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          aggregate: {
            args: Prisma.ListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateList>
          }
          groupBy: {
            args: Prisma.ListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCountArgs<ExtArgs>,
            result: $Utils.Optional<ListCountAggregateOutputType> | number
          }
        }
      }
      DayNotes: {
        payload: Prisma.$DayNotesPayload<ExtArgs>
        fields: Prisma.DayNotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayNotesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayNotesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload>
          }
          findFirst: {
            args: Prisma.DayNotesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayNotesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload>
          }
          findMany: {
            args: Prisma.DayNotesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload>[]
          }
          create: {
            args: Prisma.DayNotesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload>
          }
          createMany: {
            args: Prisma.DayNotesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DayNotesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload>
          }
          update: {
            args: Prisma.DayNotesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload>
          }
          deleteMany: {
            args: Prisma.DayNotesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DayNotesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DayNotesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DayNotesPayload>
          }
          aggregate: {
            args: Prisma.DayNotesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDayNotes>
          }
          groupBy: {
            args: Prisma.DayNotesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DayNotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayNotesCountArgs<ExtArgs>,
            result: $Utils.Optional<DayNotesCountAggregateOutputType> | number
          }
        }
      }
      ListActivation: {
        payload: Prisma.$ListActivationPayload<ExtArgs>
        fields: Prisma.ListActivationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListActivationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListActivationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload>
          }
          findFirst: {
            args: Prisma.ListActivationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListActivationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload>
          }
          findMany: {
            args: Prisma.ListActivationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload>[]
          }
          create: {
            args: Prisma.ListActivationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload>
          }
          createMany: {
            args: Prisma.ListActivationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ListActivationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload>
          }
          update: {
            args: Prisma.ListActivationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload>
          }
          deleteMany: {
            args: Prisma.ListActivationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ListActivationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ListActivationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ListActivationPayload>
          }
          aggregate: {
            args: Prisma.ListActivationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateListActivation>
          }
          groupBy: {
            args: Prisma.ListActivationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ListActivationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListActivationCountArgs<ExtArgs>,
            result: $Utils.Optional<ListActivationCountAggregateOutputType> | number
          }
        }
      }
      ExceptionsOnLists: {
        payload: Prisma.$ExceptionsOnListsPayload<ExtArgs>
        fields: Prisma.ExceptionsOnListsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExceptionsOnListsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExceptionsOnListsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload>
          }
          findFirst: {
            args: Prisma.ExceptionsOnListsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExceptionsOnListsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload>
          }
          findMany: {
            args: Prisma.ExceptionsOnListsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload>[]
          }
          create: {
            args: Prisma.ExceptionsOnListsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload>
          }
          createMany: {
            args: Prisma.ExceptionsOnListsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExceptionsOnListsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload>
          }
          update: {
            args: Prisma.ExceptionsOnListsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload>
          }
          deleteMany: {
            args: Prisma.ExceptionsOnListsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExceptionsOnListsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExceptionsOnListsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionsOnListsPayload>
          }
          aggregate: {
            args: Prisma.ExceptionsOnListsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExceptionsOnLists>
          }
          groupBy: {
            args: Prisma.ExceptionsOnListsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExceptionsOnListsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExceptionsOnListsCountArgs<ExtArgs>,
            result: $Utils.Optional<ExceptionsOnListsCountAggregateOutputType> | number
          }
        }
      }
      Exception: {
        payload: Prisma.$ExceptionPayload<ExtArgs>
        fields: Prisma.ExceptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExceptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExceptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          findFirst: {
            args: Prisma.ExceptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExceptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          findMany: {
            args: Prisma.ExceptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>[]
          }
          create: {
            args: Prisma.ExceptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          createMany: {
            args: Prisma.ExceptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExceptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          update: {
            args: Prisma.ExceptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          deleteMany: {
            args: Prisma.ExceptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExceptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExceptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExceptionPayload>
          }
          aggregate: {
            args: Prisma.ExceptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateException>
          }
          groupBy: {
            args: Prisma.ExceptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExceptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExceptionCountArgs<ExtArgs>,
            result: $Utils.Optional<ExceptionCountAggregateOutputType> | number
          }
        }
      }
      SpecificDate: {
        payload: Prisma.$SpecificDatePayload<ExtArgs>
        fields: Prisma.SpecificDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecificDateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecificDateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload>
          }
          findFirst: {
            args: Prisma.SpecificDateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecificDateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload>
          }
          findMany: {
            args: Prisma.SpecificDateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload>[]
          }
          create: {
            args: Prisma.SpecificDateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload>
          }
          createMany: {
            args: Prisma.SpecificDateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SpecificDateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload>
          }
          update: {
            args: Prisma.SpecificDateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload>
          }
          deleteMany: {
            args: Prisma.SpecificDateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SpecificDateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SpecificDateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpecificDatePayload>
          }
          aggregate: {
            args: Prisma.SpecificDateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSpecificDate>
          }
          groupBy: {
            args: Prisma.SpecificDateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SpecificDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecificDateCountArgs<ExtArgs>,
            result: $Utils.Optional<SpecificDateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    attendances: number
    visitations: number
    GroupsOnStudents: number
    Exception: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | StudentCountOutputTypeCountAttendancesArgs
    visitations?: boolean | StudentCountOutputTypeCountVisitationsArgs
    GroupsOnStudents?: boolean | StudentCountOutputTypeCountGroupsOnStudentsArgs
    Exception?: boolean | StudentCountOutputTypeCountExceptionArgs
  }

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountVisitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitationWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGroupsOnStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupsOnStudentsWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountExceptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionWhereInput
  }



  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    GroupsOnStudents: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GroupsOnStudents?: boolean | GroupCountOutputTypeCountGroupsOnStudentsArgs
  }

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountGroupsOnStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupsOnStudentsWhereInput
  }



  /**
   * Count Type ListCountOutputType
   */

  export type ListCountOutputType = {
    Group: number
    activations: number
    Visitation: number
    Attendance: number
    ExceptionsOnLists: number
    DayNotes: number
  }

  export type ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Group?: boolean | ListCountOutputTypeCountGroupArgs
    activations?: boolean | ListCountOutputTypeCountActivationsArgs
    Visitation?: boolean | ListCountOutputTypeCountVisitationArgs
    Attendance?: boolean | ListCountOutputTypeCountAttendanceArgs
    ExceptionsOnLists?: boolean | ListCountOutputTypeCountExceptionsOnListsArgs
    DayNotes?: boolean | ListCountOutputTypeCountDayNotesArgs
  }

  // Custom InputTypes

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     */
    select?: ListCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListActivationWhereInput
  }


  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountVisitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitationWhereInput
  }


  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountExceptionsOnListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionsOnListsWhereInput
  }


  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountDayNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayNotesWhereInput
  }



  /**
   * Count Type ExceptionCountOutputType
   */

  export type ExceptionCountOutputType = {
    SpecificDates: number
    ExceptionsOnLists: number
  }

  export type ExceptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SpecificDates?: boolean | ExceptionCountOutputTypeCountSpecificDatesArgs
    ExceptionsOnLists?: boolean | ExceptionCountOutputTypeCountExceptionsOnListsArgs
  }

  // Custom InputTypes

  /**
   * ExceptionCountOutputType without action
   */
  export type ExceptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionCountOutputType
     */
    select?: ExceptionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ExceptionCountOutputType without action
   */
  export type ExceptionCountOutputTypeCountSpecificDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecificDateWhereInput
  }


  /**
   * ExceptionCountOutputType without action
   */
  export type ExceptionCountOutputTypeCountExceptionsOnListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionsOnListsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    grade: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    grade: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    notes: string | null
    grade: number | null
    className: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    notes: string | null
    grade: number | null
    className: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    firstName: number
    lastName: number
    notes: number
    grade: number
    className: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    grade?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    grade?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    notes?: true
    grade?: true
    className?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    notes?: true
    grade?: true
    className?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    notes?: true
    grade?: true
    className?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    notes: string | null
    grade: number
    className: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    notes?: boolean
    grade?: boolean
    className?: boolean
    attendances?: boolean | Student$attendancesArgs<ExtArgs>
    visitations?: boolean | Student$visitationsArgs<ExtArgs>
    GroupsOnStudents?: boolean | Student$GroupsOnStudentsArgs<ExtArgs>
    Exception?: boolean | Student$ExceptionArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    notes?: boolean
    grade?: boolean
    className?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | Student$attendancesArgs<ExtArgs>
    visitations?: boolean | Student$visitationsArgs<ExtArgs>
    GroupsOnStudents?: boolean | Student$GroupsOnStudentsArgs<ExtArgs>
    Exception?: boolean | Student$ExceptionArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      visitations: Prisma.$VisitationPayload<ExtArgs>[]
      GroupsOnStudents: Prisma.$GroupsOnStudentsPayload<ExtArgs>[]
      Exception: Prisma.$ExceptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      firstName: string
      lastName: string
      notes: string | null
      grade: number
      className: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }


  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attendances<T extends Student$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    visitations<T extends Student$visitationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$visitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'findMany'> | Null>;

    GroupsOnStudents<T extends Student$GroupsOnStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$GroupsOnStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Exception<T extends Student$ExceptionArgs<ExtArgs> = {}>(args?: Subset<T, Student$ExceptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly notes: FieldRef<"Student", 'String'>
    readonly grade: FieldRef<"Student", 'Int'>
    readonly className: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }


  /**
   * Student.attendances
   */
  export type Student$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Student.visitations
   */
  export type Student$visitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    where?: VisitationWhereInput
    orderBy?: VisitationOrderByWithRelationInput | VisitationOrderByWithRelationInput[]
    cursor?: VisitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitationScalarFieldEnum | VisitationScalarFieldEnum[]
  }


  /**
   * Student.GroupsOnStudents
   */
  export type Student$GroupsOnStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    where?: GroupsOnStudentsWhereInput
    orderBy?: GroupsOnStudentsOrderByWithRelationInput | GroupsOnStudentsOrderByWithRelationInput[]
    cursor?: GroupsOnStudentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsOnStudentsScalarFieldEnum | GroupsOnStudentsScalarFieldEnum[]
  }


  /**
   * Student.Exception
   */
  export type Student$ExceptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    where?: ExceptionWhereInput
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    cursor?: ExceptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }


  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
  }



  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    day: number | null
    end: number | null
    studentId: number | null
    listId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    day: number | null
    end: number | null
    studentId: number | null
    listId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    day: number | null
    end: number | null
    status: $Enums.AttendanceStatus | null
    studentId: number | null
    listId: number | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    day: number | null
    end: number | null
    status: $Enums.AttendanceStatus | null
    studentId: number | null
    listId: number | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    day: number
    end: number
    status: number
    studentId: number
    listId: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    day?: true
    end?: true
    studentId?: true
    listId?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    day?: true
    end?: true
    studentId?: true
    listId?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    day?: true
    end?: true
    status?: true
    studentId?: true
    listId?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    day?: true
    end?: true
    status?: true
    studentId?: true
    listId?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    day?: true
    end?: true
    status?: true
    studentId?: true
    listId?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    day: number
    end: number
    status: $Enums.AttendanceStatus
    studentId: number
    listId: number
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    day?: boolean
    end?: boolean
    status?: boolean
    studentId?: boolean
    listId?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    List?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    day?: boolean
    end?: boolean
    status?: boolean
    studentId?: boolean
    listId?: boolean
  }

  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    List?: boolean | ListDefaultArgs<ExtArgs>
  }


  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs>
      List: Prisma.$ListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      day: number
      end: number
      status: $Enums.AttendanceStatus
      studentId: number
      listId: number
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }


  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttendanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttendanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttendanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
    **/
    create<T extends AttendanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attendances.
     *     @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     *     @example
     *     // Create many Attendances
     *     const attendance = await prisma.attendance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttendanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
    **/
    delete<T extends AttendanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttendanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttendanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttendanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
    **/
    upsert<T extends AttendanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    List<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
    readonly day: FieldRef<"Attendance", 'Int'>
    readonly end: FieldRef<"Attendance", 'Int'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly studentId: FieldRef<"Attendance", 'Int'>
    readonly listId: FieldRef<"Attendance", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }


  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }


  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }


  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }


  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
  }



  /**
   * Model Visitation
   */

  export type AggregateVisitation = {
    _count: VisitationCountAggregateOutputType | null
    _avg: VisitationAvgAggregateOutputType | null
    _sum: VisitationSumAggregateOutputType | null
    _min: VisitationMinAggregateOutputType | null
    _max: VisitationMaxAggregateOutputType | null
  }

  export type VisitationAvgAggregateOutputType = {
    id: number | null
    start: number | null
    end: number | null
    studentId: number | null
    listId: number | null
  }

  export type VisitationSumAggregateOutputType = {
    id: number | null
    start: number | null
    end: number | null
    studentId: number | null
    listId: number | null
  }

  export type VisitationMinAggregateOutputType = {
    id: number | null
    date: Date | null
    start: number | null
    end: number | null
    studentId: number | null
    listId: number | null
    startNotes: string | null
    endNotes: string | null
    hasHomework: boolean | null
  }

  export type VisitationMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    start: number | null
    end: number | null
    studentId: number | null
    listId: number | null
    startNotes: string | null
    endNotes: string | null
    hasHomework: boolean | null
  }

  export type VisitationCountAggregateOutputType = {
    id: number
    date: number
    start: number
    end: number
    studentId: number
    listId: number
    startNotes: number
    endNotes: number
    hasHomework: number
    _all: number
  }


  export type VisitationAvgAggregateInputType = {
    id?: true
    start?: true
    end?: true
    studentId?: true
    listId?: true
  }

  export type VisitationSumAggregateInputType = {
    id?: true
    start?: true
    end?: true
    studentId?: true
    listId?: true
  }

  export type VisitationMinAggregateInputType = {
    id?: true
    date?: true
    start?: true
    end?: true
    studentId?: true
    listId?: true
    startNotes?: true
    endNotes?: true
    hasHomework?: true
  }

  export type VisitationMaxAggregateInputType = {
    id?: true
    date?: true
    start?: true
    end?: true
    studentId?: true
    listId?: true
    startNotes?: true
    endNotes?: true
    hasHomework?: true
  }

  export type VisitationCountAggregateInputType = {
    id?: true
    date?: true
    start?: true
    end?: true
    studentId?: true
    listId?: true
    startNotes?: true
    endNotes?: true
    hasHomework?: true
    _all?: true
  }

  export type VisitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitation to aggregate.
     */
    where?: VisitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitations to fetch.
     */
    orderBy?: VisitationOrderByWithRelationInput | VisitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitations
    **/
    _count?: true | VisitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitationMaxAggregateInputType
  }

  export type GetVisitationAggregateType<T extends VisitationAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitation[P]>
      : GetScalarType<T[P], AggregateVisitation[P]>
  }




  export type VisitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitationWhereInput
    orderBy?: VisitationOrderByWithAggregationInput | VisitationOrderByWithAggregationInput[]
    by: VisitationScalarFieldEnum[] | VisitationScalarFieldEnum
    having?: VisitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitationCountAggregateInputType | true
    _avg?: VisitationAvgAggregateInputType
    _sum?: VisitationSumAggregateInputType
    _min?: VisitationMinAggregateInputType
    _max?: VisitationMaxAggregateInputType
  }

  export type VisitationGroupByOutputType = {
    id: number
    date: Date
    start: number
    end: number | null
    studentId: number
    listId: number
    startNotes: string | null
    endNotes: string | null
    hasHomework: boolean | null
    _count: VisitationCountAggregateOutputType | null
    _avg: VisitationAvgAggregateOutputType | null
    _sum: VisitationSumAggregateOutputType | null
    _min: VisitationMinAggregateOutputType | null
    _max: VisitationMaxAggregateOutputType | null
  }

  type GetVisitationGroupByPayload<T extends VisitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitationGroupByOutputType[P]>
            : GetScalarType<T[P], VisitationGroupByOutputType[P]>
        }
      >
    >


  export type VisitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    start?: boolean
    end?: boolean
    studentId?: boolean
    listId?: boolean
    startNotes?: boolean
    endNotes?: boolean
    hasHomework?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    List?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitation"]>

  export type VisitationSelectScalar = {
    id?: boolean
    date?: boolean
    start?: boolean
    end?: boolean
    studentId?: boolean
    listId?: boolean
    startNotes?: boolean
    endNotes?: boolean
    hasHomework?: boolean
  }

  export type VisitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    List?: boolean | ListDefaultArgs<ExtArgs>
  }


  export type $VisitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitation"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs>
      List: Prisma.$ListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      start: number
      end: number | null
      studentId: number
      listId: number
      startNotes: string | null
      endNotes: string | null
      hasHomework: boolean | null
    }, ExtArgs["result"]["visitation"]>
    composites: {}
  }


  type VisitationGetPayload<S extends boolean | null | undefined | VisitationDefaultArgs> = $Result.GetResult<Prisma.$VisitationPayload, S>

  type VisitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VisitationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VisitationCountAggregateInputType | true
    }

  export interface VisitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitation'], meta: { name: 'Visitation' } }
    /**
     * Find zero or one Visitation that matches the filter.
     * @param {VisitationFindUniqueArgs} args - Arguments to find a Visitation
     * @example
     * // Get one Visitation
     * const visitation = await prisma.visitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisitationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VisitationFindUniqueArgs<ExtArgs>>
    ): Prisma__VisitationClient<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Visitation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisitationFindUniqueOrThrowArgs} args - Arguments to find a Visitation
     * @example
     * // Get one Visitation
     * const visitation = await prisma.visitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisitationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VisitationClient<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Visitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitationFindFirstArgs} args - Arguments to find a Visitation
     * @example
     * // Get one Visitation
     * const visitation = await prisma.visitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisitationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitationFindFirstArgs<ExtArgs>>
    ): Prisma__VisitationClient<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Visitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitationFindFirstOrThrowArgs} args - Arguments to find a Visitation
     * @example
     * // Get one Visitation
     * const visitation = await prisma.visitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisitationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VisitationClient<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Visitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitations
     * const visitations = await prisma.visitation.findMany()
     * 
     * // Get first 10 Visitations
     * const visitations = await prisma.visitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitationWithIdOnly = await prisma.visitation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VisitationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Visitation.
     * @param {VisitationCreateArgs} args - Arguments to create a Visitation.
     * @example
     * // Create one Visitation
     * const Visitation = await prisma.visitation.create({
     *   data: {
     *     // ... data to create a Visitation
     *   }
     * })
     * 
    **/
    create<T extends VisitationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VisitationCreateArgs<ExtArgs>>
    ): Prisma__VisitationClient<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Visitations.
     *     @param {VisitationCreateManyArgs} args - Arguments to create many Visitations.
     *     @example
     *     // Create many Visitations
     *     const visitation = await prisma.visitation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VisitationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visitation.
     * @param {VisitationDeleteArgs} args - Arguments to delete one Visitation.
     * @example
     * // Delete one Visitation
     * const Visitation = await prisma.visitation.delete({
     *   where: {
     *     // ... filter to delete one Visitation
     *   }
     * })
     * 
    **/
    delete<T extends VisitationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VisitationDeleteArgs<ExtArgs>>
    ): Prisma__VisitationClient<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Visitation.
     * @param {VisitationUpdateArgs} args - Arguments to update one Visitation.
     * @example
     * // Update one Visitation
     * const visitation = await prisma.visitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisitationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VisitationUpdateArgs<ExtArgs>>
    ): Prisma__VisitationClient<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Visitations.
     * @param {VisitationDeleteManyArgs} args - Arguments to filter Visitations to delete.
     * @example
     * // Delete a few Visitations
     * const { count } = await prisma.visitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisitationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisitationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitations
     * const visitation = await prisma.visitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisitationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VisitationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visitation.
     * @param {VisitationUpsertArgs} args - Arguments to update or create a Visitation.
     * @example
     * // Update or create a Visitation
     * const visitation = await prisma.visitation.upsert({
     *   create: {
     *     // ... data to create a Visitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitation we want to update
     *   }
     * })
    **/
    upsert<T extends VisitationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VisitationUpsertArgs<ExtArgs>>
    ): Prisma__VisitationClient<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Visitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitationCountArgs} args - Arguments to filter Visitations to count.
     * @example
     * // Count the number of Visitations
     * const count = await prisma.visitation.count({
     *   where: {
     *     // ... the filter for the Visitations we want to count
     *   }
     * })
    **/
    count<T extends VisitationCountArgs>(
      args?: Subset<T, VisitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitationAggregateArgs>(args: Subset<T, VisitationAggregateArgs>): Prisma.PrismaPromise<GetVisitationAggregateType<T>>

    /**
     * Group by Visitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitationGroupByArgs} args - Group by arguments.
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
      T extends VisitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitationGroupByArgs['orderBy'] }
        : { orderBy?: VisitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitation model
   */
  readonly fields: VisitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    List<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Visitation model
   */ 
  interface VisitationFieldRefs {
    readonly id: FieldRef<"Visitation", 'Int'>
    readonly date: FieldRef<"Visitation", 'DateTime'>
    readonly start: FieldRef<"Visitation", 'Int'>
    readonly end: FieldRef<"Visitation", 'Int'>
    readonly studentId: FieldRef<"Visitation", 'Int'>
    readonly listId: FieldRef<"Visitation", 'Int'>
    readonly startNotes: FieldRef<"Visitation", 'String'>
    readonly endNotes: FieldRef<"Visitation", 'String'>
    readonly hasHomework: FieldRef<"Visitation", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Visitation findUnique
   */
  export type VisitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * Filter, which Visitation to fetch.
     */
    where: VisitationWhereUniqueInput
  }


  /**
   * Visitation findUniqueOrThrow
   */
  export type VisitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * Filter, which Visitation to fetch.
     */
    where: VisitationWhereUniqueInput
  }


  /**
   * Visitation findFirst
   */
  export type VisitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * Filter, which Visitation to fetch.
     */
    where?: VisitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitations to fetch.
     */
    orderBy?: VisitationOrderByWithRelationInput | VisitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitations.
     */
    cursor?: VisitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitations.
     */
    distinct?: VisitationScalarFieldEnum | VisitationScalarFieldEnum[]
  }


  /**
   * Visitation findFirstOrThrow
   */
  export type VisitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * Filter, which Visitation to fetch.
     */
    where?: VisitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitations to fetch.
     */
    orderBy?: VisitationOrderByWithRelationInput | VisitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitations.
     */
    cursor?: VisitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitations.
     */
    distinct?: VisitationScalarFieldEnum | VisitationScalarFieldEnum[]
  }


  /**
   * Visitation findMany
   */
  export type VisitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * Filter, which Visitations to fetch.
     */
    where?: VisitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitations to fetch.
     */
    orderBy?: VisitationOrderByWithRelationInput | VisitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitations.
     */
    cursor?: VisitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitations.
     */
    skip?: number
    distinct?: VisitationScalarFieldEnum | VisitationScalarFieldEnum[]
  }


  /**
   * Visitation create
   */
  export type VisitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitation.
     */
    data: XOR<VisitationCreateInput, VisitationUncheckedCreateInput>
  }


  /**
   * Visitation createMany
   */
  export type VisitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitations.
     */
    data: VisitationCreateManyInput | VisitationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Visitation update
   */
  export type VisitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitation.
     */
    data: XOR<VisitationUpdateInput, VisitationUncheckedUpdateInput>
    /**
     * Choose, which Visitation to update.
     */
    where: VisitationWhereUniqueInput
  }


  /**
   * Visitation updateMany
   */
  export type VisitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitations.
     */
    data: XOR<VisitationUpdateManyMutationInput, VisitationUncheckedUpdateManyInput>
    /**
     * Filter which Visitations to update
     */
    where?: VisitationWhereInput
  }


  /**
   * Visitation upsert
   */
  export type VisitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitation to update in case it exists.
     */
    where: VisitationWhereUniqueInput
    /**
     * In case the Visitation found by the `where` argument doesn't exist, create a new Visitation with this data.
     */
    create: XOR<VisitationCreateInput, VisitationUncheckedCreateInput>
    /**
     * In case the Visitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitationUpdateInput, VisitationUncheckedUpdateInput>
  }


  /**
   * Visitation delete
   */
  export type VisitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    /**
     * Filter which Visitation to delete.
     */
    where: VisitationWhereUniqueInput
  }


  /**
   * Visitation deleteMany
   */
  export type VisitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitations to delete
     */
    where?: VisitationWhereInput
  }


  /**
   * Visitation without action
   */
  export type VisitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
  }



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
    role: $Enums.Role | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    username: number
    password: number
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
    role?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    username?: true
    password?: true
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
    role: $Enums.Role
    username: string
    password: string
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
    role?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    username?: boolean
    password?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.Role
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'Role'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    listId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    listId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    listId: number | null
    isMainGroup: boolean | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    listId: number | null
    isMainGroup: boolean | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    color: number
    listId: number
    isMainGroup: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    listId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    listId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    listId?: true
    isMainGroup?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    listId?: true
    isMainGroup?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    listId?: true
    isMainGroup?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    color: string | null
    listId: number | null
    isMainGroup: boolean
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    listId?: boolean
    isMainGroup?: boolean
    GroupsOnStudents?: boolean | Group$GroupsOnStudentsArgs<ExtArgs>
    list?: boolean | Group$listArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    listId?: boolean
    isMainGroup?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GroupsOnStudents?: boolean | Group$GroupsOnStudentsArgs<ExtArgs>
    list?: boolean | Group$listArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      GroupsOnStudents: Prisma.$GroupsOnStudentsPayload<ExtArgs>[]
      list: Prisma.$ListPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color: string | null
      listId: number | null
      isMainGroup: boolean
    }, ExtArgs["result"]["group"]>
    composites: {}
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    GroupsOnStudents<T extends Group$GroupsOnStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$GroupsOnStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    list<T extends Group$listArgs<ExtArgs> = {}>(args?: Subset<T, Group$listArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly color: FieldRef<"Group", 'String'>
    readonly listId: FieldRef<"Group", 'Int'>
    readonly isMainGroup: FieldRef<"Group", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }


  /**
   * Group.GroupsOnStudents
   */
  export type Group$GroupsOnStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    where?: GroupsOnStudentsWhereInput
    orderBy?: GroupsOnStudentsOrderByWithRelationInput | GroupsOnStudentsOrderByWithRelationInput[]
    cursor?: GroupsOnStudentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsOnStudentsScalarFieldEnum | GroupsOnStudentsScalarFieldEnum[]
  }


  /**
   * Group.list
   */
  export type Group$listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
  }


  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
  }



  /**
   * Model GroupsOnStudents
   */

  export type AggregateGroupsOnStudents = {
    _count: GroupsOnStudentsCountAggregateOutputType | null
    _avg: GroupsOnStudentsAvgAggregateOutputType | null
    _sum: GroupsOnStudentsSumAggregateOutputType | null
    _min: GroupsOnStudentsMinAggregateOutputType | null
    _max: GroupsOnStudentsMaxAggregateOutputType | null
  }

  export type GroupsOnStudentsAvgAggregateOutputType = {
    studentId: number | null
    groupId: number | null
  }

  export type GroupsOnStudentsSumAggregateOutputType = {
    studentId: number | null
    groupId: number | null
  }

  export type GroupsOnStudentsMinAggregateOutputType = {
    studentId: number | null
    groupId: number | null
  }

  export type GroupsOnStudentsMaxAggregateOutputType = {
    studentId: number | null
    groupId: number | null
  }

  export type GroupsOnStudentsCountAggregateOutputType = {
    studentId: number
    groupId: number
    _all: number
  }


  export type GroupsOnStudentsAvgAggregateInputType = {
    studentId?: true
    groupId?: true
  }

  export type GroupsOnStudentsSumAggregateInputType = {
    studentId?: true
    groupId?: true
  }

  export type GroupsOnStudentsMinAggregateInputType = {
    studentId?: true
    groupId?: true
  }

  export type GroupsOnStudentsMaxAggregateInputType = {
    studentId?: true
    groupId?: true
  }

  export type GroupsOnStudentsCountAggregateInputType = {
    studentId?: true
    groupId?: true
    _all?: true
  }

  export type GroupsOnStudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupsOnStudents to aggregate.
     */
    where?: GroupsOnStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupsOnStudents to fetch.
     */
    orderBy?: GroupsOnStudentsOrderByWithRelationInput | GroupsOnStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupsOnStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupsOnStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupsOnStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupsOnStudents
    **/
    _count?: true | GroupsOnStudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupsOnStudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupsOnStudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsOnStudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsOnStudentsMaxAggregateInputType
  }

  export type GetGroupsOnStudentsAggregateType<T extends GroupsOnStudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupsOnStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupsOnStudents[P]>
      : GetScalarType<T[P], AggregateGroupsOnStudents[P]>
  }




  export type GroupsOnStudentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupsOnStudentsWhereInput
    orderBy?: GroupsOnStudentsOrderByWithAggregationInput | GroupsOnStudentsOrderByWithAggregationInput[]
    by: GroupsOnStudentsScalarFieldEnum[] | GroupsOnStudentsScalarFieldEnum
    having?: GroupsOnStudentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsOnStudentsCountAggregateInputType | true
    _avg?: GroupsOnStudentsAvgAggregateInputType
    _sum?: GroupsOnStudentsSumAggregateInputType
    _min?: GroupsOnStudentsMinAggregateInputType
    _max?: GroupsOnStudentsMaxAggregateInputType
  }

  export type GroupsOnStudentsGroupByOutputType = {
    studentId: number
    groupId: number
    _count: GroupsOnStudentsCountAggregateOutputType | null
    _avg: GroupsOnStudentsAvgAggregateOutputType | null
    _sum: GroupsOnStudentsSumAggregateOutputType | null
    _min: GroupsOnStudentsMinAggregateOutputType | null
    _max: GroupsOnStudentsMaxAggregateOutputType | null
  }

  type GetGroupsOnStudentsGroupByPayload<T extends GroupsOnStudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsOnStudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsOnStudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsOnStudentsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsOnStudentsGroupByOutputType[P]>
        }
      >
    >


  export type GroupsOnStudentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    groupId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupsOnStudents"]>

  export type GroupsOnStudentsSelectScalar = {
    studentId?: boolean
    groupId?: boolean
  }

  export type GroupsOnStudentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }


  export type $GroupsOnStudentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupsOnStudents"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      studentId: number
      groupId: number
    }, ExtArgs["result"]["groupsOnStudents"]>
    composites: {}
  }


  type GroupsOnStudentsGetPayload<S extends boolean | null | undefined | GroupsOnStudentsDefaultArgs> = $Result.GetResult<Prisma.$GroupsOnStudentsPayload, S>

  type GroupsOnStudentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupsOnStudentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroupsOnStudentsCountAggregateInputType | true
    }

  export interface GroupsOnStudentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupsOnStudents'], meta: { name: 'GroupsOnStudents' } }
    /**
     * Find zero or one GroupsOnStudents that matches the filter.
     * @param {GroupsOnStudentsFindUniqueArgs} args - Arguments to find a GroupsOnStudents
     * @example
     * // Get one GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupsOnStudentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupsOnStudentsFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupsOnStudentsClient<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GroupsOnStudents that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupsOnStudentsFindUniqueOrThrowArgs} args - Arguments to find a GroupsOnStudents
     * @example
     * // Get one GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupsOnStudentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupsOnStudentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupsOnStudentsClient<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GroupsOnStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsOnStudentsFindFirstArgs} args - Arguments to find a GroupsOnStudents
     * @example
     * // Get one GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupsOnStudentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupsOnStudentsFindFirstArgs<ExtArgs>>
    ): Prisma__GroupsOnStudentsClient<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GroupsOnStudents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsOnStudentsFindFirstOrThrowArgs} args - Arguments to find a GroupsOnStudents
     * @example
     * // Get one GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupsOnStudentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupsOnStudentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupsOnStudentsClient<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GroupsOnStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsOnStudentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.findMany()
     * 
     * // Get first 10 GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const groupsOnStudentsWithStudentIdOnly = await prisma.groupsOnStudents.findMany({ select: { studentId: true } })
     * 
    **/
    findMany<T extends GroupsOnStudentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupsOnStudentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GroupsOnStudents.
     * @param {GroupsOnStudentsCreateArgs} args - Arguments to create a GroupsOnStudents.
     * @example
     * // Create one GroupsOnStudents
     * const GroupsOnStudents = await prisma.groupsOnStudents.create({
     *   data: {
     *     // ... data to create a GroupsOnStudents
     *   }
     * })
     * 
    **/
    create<T extends GroupsOnStudentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupsOnStudentsCreateArgs<ExtArgs>>
    ): Prisma__GroupsOnStudentsClient<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GroupsOnStudents.
     *     @param {GroupsOnStudentsCreateManyArgs} args - Arguments to create many GroupsOnStudents.
     *     @example
     *     // Create many GroupsOnStudents
     *     const groupsOnStudents = await prisma.groupsOnStudents.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupsOnStudentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupsOnStudentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupsOnStudents.
     * @param {GroupsOnStudentsDeleteArgs} args - Arguments to delete one GroupsOnStudents.
     * @example
     * // Delete one GroupsOnStudents
     * const GroupsOnStudents = await prisma.groupsOnStudents.delete({
     *   where: {
     *     // ... filter to delete one GroupsOnStudents
     *   }
     * })
     * 
    **/
    delete<T extends GroupsOnStudentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupsOnStudentsDeleteArgs<ExtArgs>>
    ): Prisma__GroupsOnStudentsClient<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GroupsOnStudents.
     * @param {GroupsOnStudentsUpdateArgs} args - Arguments to update one GroupsOnStudents.
     * @example
     * // Update one GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupsOnStudentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupsOnStudentsUpdateArgs<ExtArgs>>
    ): Prisma__GroupsOnStudentsClient<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GroupsOnStudents.
     * @param {GroupsOnStudentsDeleteManyArgs} args - Arguments to filter GroupsOnStudents to delete.
     * @example
     * // Delete a few GroupsOnStudents
     * const { count } = await prisma.groupsOnStudents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupsOnStudentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupsOnStudentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupsOnStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsOnStudentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupsOnStudentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupsOnStudentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupsOnStudents.
     * @param {GroupsOnStudentsUpsertArgs} args - Arguments to update or create a GroupsOnStudents.
     * @example
     * // Update or create a GroupsOnStudents
     * const groupsOnStudents = await prisma.groupsOnStudents.upsert({
     *   create: {
     *     // ... data to create a GroupsOnStudents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupsOnStudents we want to update
     *   }
     * })
    **/
    upsert<T extends GroupsOnStudentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupsOnStudentsUpsertArgs<ExtArgs>>
    ): Prisma__GroupsOnStudentsClient<$Result.GetResult<Prisma.$GroupsOnStudentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GroupsOnStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsOnStudentsCountArgs} args - Arguments to filter GroupsOnStudents to count.
     * @example
     * // Count the number of GroupsOnStudents
     * const count = await prisma.groupsOnStudents.count({
     *   where: {
     *     // ... the filter for the GroupsOnStudents we want to count
     *   }
     * })
    **/
    count<T extends GroupsOnStudentsCountArgs>(
      args?: Subset<T, GroupsOnStudentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsOnStudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupsOnStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsOnStudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupsOnStudentsAggregateArgs>(args: Subset<T, GroupsOnStudentsAggregateArgs>): Prisma.PrismaPromise<GetGroupsOnStudentsAggregateType<T>>

    /**
     * Group by GroupsOnStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsOnStudentsGroupByArgs} args - Group by arguments.
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
      T extends GroupsOnStudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupsOnStudentsGroupByArgs['orderBy'] }
        : { orderBy?: GroupsOnStudentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupsOnStudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsOnStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupsOnStudents model
   */
  readonly fields: GroupsOnStudentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupsOnStudents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupsOnStudentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GroupsOnStudents model
   */ 
  interface GroupsOnStudentsFieldRefs {
    readonly studentId: FieldRef<"GroupsOnStudents", 'Int'>
    readonly groupId: FieldRef<"GroupsOnStudents", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * GroupsOnStudents findUnique
   */
  export type GroupsOnStudentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * Filter, which GroupsOnStudents to fetch.
     */
    where: GroupsOnStudentsWhereUniqueInput
  }


  /**
   * GroupsOnStudents findUniqueOrThrow
   */
  export type GroupsOnStudentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * Filter, which GroupsOnStudents to fetch.
     */
    where: GroupsOnStudentsWhereUniqueInput
  }


  /**
   * GroupsOnStudents findFirst
   */
  export type GroupsOnStudentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * Filter, which GroupsOnStudents to fetch.
     */
    where?: GroupsOnStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupsOnStudents to fetch.
     */
    orderBy?: GroupsOnStudentsOrderByWithRelationInput | GroupsOnStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupsOnStudents.
     */
    cursor?: GroupsOnStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupsOnStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupsOnStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupsOnStudents.
     */
    distinct?: GroupsOnStudentsScalarFieldEnum | GroupsOnStudentsScalarFieldEnum[]
  }


  /**
   * GroupsOnStudents findFirstOrThrow
   */
  export type GroupsOnStudentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * Filter, which GroupsOnStudents to fetch.
     */
    where?: GroupsOnStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupsOnStudents to fetch.
     */
    orderBy?: GroupsOnStudentsOrderByWithRelationInput | GroupsOnStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupsOnStudents.
     */
    cursor?: GroupsOnStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupsOnStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupsOnStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupsOnStudents.
     */
    distinct?: GroupsOnStudentsScalarFieldEnum | GroupsOnStudentsScalarFieldEnum[]
  }


  /**
   * GroupsOnStudents findMany
   */
  export type GroupsOnStudentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * Filter, which GroupsOnStudents to fetch.
     */
    where?: GroupsOnStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupsOnStudents to fetch.
     */
    orderBy?: GroupsOnStudentsOrderByWithRelationInput | GroupsOnStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupsOnStudents.
     */
    cursor?: GroupsOnStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupsOnStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupsOnStudents.
     */
    skip?: number
    distinct?: GroupsOnStudentsScalarFieldEnum | GroupsOnStudentsScalarFieldEnum[]
  }


  /**
   * GroupsOnStudents create
   */
  export type GroupsOnStudentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupsOnStudents.
     */
    data: XOR<GroupsOnStudentsCreateInput, GroupsOnStudentsUncheckedCreateInput>
  }


  /**
   * GroupsOnStudents createMany
   */
  export type GroupsOnStudentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupsOnStudents.
     */
    data: GroupsOnStudentsCreateManyInput | GroupsOnStudentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GroupsOnStudents update
   */
  export type GroupsOnStudentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupsOnStudents.
     */
    data: XOR<GroupsOnStudentsUpdateInput, GroupsOnStudentsUncheckedUpdateInput>
    /**
     * Choose, which GroupsOnStudents to update.
     */
    where: GroupsOnStudentsWhereUniqueInput
  }


  /**
   * GroupsOnStudents updateMany
   */
  export type GroupsOnStudentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupsOnStudents.
     */
    data: XOR<GroupsOnStudentsUpdateManyMutationInput, GroupsOnStudentsUncheckedUpdateManyInput>
    /**
     * Filter which GroupsOnStudents to update
     */
    where?: GroupsOnStudentsWhereInput
  }


  /**
   * GroupsOnStudents upsert
   */
  export type GroupsOnStudentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupsOnStudents to update in case it exists.
     */
    where: GroupsOnStudentsWhereUniqueInput
    /**
     * In case the GroupsOnStudents found by the `where` argument doesn't exist, create a new GroupsOnStudents with this data.
     */
    create: XOR<GroupsOnStudentsCreateInput, GroupsOnStudentsUncheckedCreateInput>
    /**
     * In case the GroupsOnStudents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupsOnStudentsUpdateInput, GroupsOnStudentsUncheckedUpdateInput>
  }


  /**
   * GroupsOnStudents delete
   */
  export type GroupsOnStudentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
    /**
     * Filter which GroupsOnStudents to delete.
     */
    where: GroupsOnStudentsWhereUniqueInput
  }


  /**
   * GroupsOnStudents deleteMany
   */
  export type GroupsOnStudentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupsOnStudents to delete
     */
    where?: GroupsOnStudentsWhereInput
  }


  /**
   * GroupsOnStudents without action
   */
  export type GroupsOnStudentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsOnStudents
     */
    select?: GroupsOnStudentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupsOnStudentsInclude<ExtArgs> | null
  }



  /**
   * Model List
   */

  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListAvgAggregateOutputType = {
    id: number | null
  }

  export type ListSumAggregateOutputType = {
    id: number | null
  }

  export type ListMinAggregateOutputType = {
    id: number | null
    name: string | null
    isMainList: boolean | null
    recordTime: $Enums.RecordTime | null
    manageTime: $Enums.TimeManagement | null
    studentName: boolean | null
    className: boolean | null
    time: boolean | null
    notes: $Enums.ListStudentNotes | null
    groupColor: boolean | null
  }

  export type ListMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isMainList: boolean | null
    recordTime: $Enums.RecordTime | null
    manageTime: $Enums.TimeManagement | null
    studentName: boolean | null
    className: boolean | null
    time: boolean | null
    notes: $Enums.ListStudentNotes | null
    groupColor: boolean | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    name: number
    isMainList: number
    recordTime: number
    manageTime: number
    studentName: number
    className: number
    time: number
    notes: number
    groupColor: number
    _all: number
  }


  export type ListAvgAggregateInputType = {
    id?: true
  }

  export type ListSumAggregateInputType = {
    id?: true
  }

  export type ListMinAggregateInputType = {
    id?: true
    name?: true
    isMainList?: true
    recordTime?: true
    manageTime?: true
    studentName?: true
    className?: true
    time?: true
    notes?: true
    groupColor?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    name?: true
    isMainList?: true
    recordTime?: true
    manageTime?: true
    studentName?: true
    className?: true
    time?: true
    notes?: true
    groupColor?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    name?: true
    isMainList?: true
    recordTime?: true
    manageTime?: true
    studentName?: true
    className?: true
    time?: true
    notes?: true
    groupColor?: true
    _all?: true
  }

  export type ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List to aggregate.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
    orderBy?: ListOrderByWithAggregationInput | ListOrderByWithAggregationInput[]
    by: ListScalarFieldEnum[] | ListScalarFieldEnum
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _avg?: ListAvgAggregateInputType
    _sum?: ListSumAggregateInputType
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }

  export type ListGroupByOutputType = {
    id: number
    name: string
    isMainList: boolean
    recordTime: $Enums.RecordTime
    manageTime: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isMainList?: boolean
    recordTime?: boolean
    manageTime?: boolean
    studentName?: boolean
    className?: boolean
    time?: boolean
    notes?: boolean
    groupColor?: boolean
    Group?: boolean | List$GroupArgs<ExtArgs>
    activations?: boolean | List$activationsArgs<ExtArgs>
    Visitation?: boolean | List$VisitationArgs<ExtArgs>
    Attendance?: boolean | List$AttendanceArgs<ExtArgs>
    ExceptionsOnLists?: boolean | List$ExceptionsOnListsArgs<ExtArgs>
    DayNotes?: boolean | List$DayNotesArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectScalar = {
    id?: boolean
    name?: boolean
    isMainList?: boolean
    recordTime?: boolean
    manageTime?: boolean
    studentName?: boolean
    className?: boolean
    time?: boolean
    notes?: boolean
    groupColor?: boolean
  }

  export type ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Group?: boolean | List$GroupArgs<ExtArgs>
    activations?: boolean | List$activationsArgs<ExtArgs>
    Visitation?: boolean | List$VisitationArgs<ExtArgs>
    Attendance?: boolean | List$AttendanceArgs<ExtArgs>
    ExceptionsOnLists?: boolean | List$ExceptionsOnListsArgs<ExtArgs>
    DayNotes?: boolean | List$DayNotesArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List"
    objects: {
      Group: Prisma.$GroupPayload<ExtArgs>[]
      activations: Prisma.$ListActivationPayload<ExtArgs>[]
      Visitation: Prisma.$VisitationPayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      ExceptionsOnLists: Prisma.$ExceptionsOnListsPayload<ExtArgs>[]
      DayNotes: Prisma.$DayNotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isMainList: boolean
      recordTime: $Enums.RecordTime
      manageTime: $Enums.TimeManagement
      studentName: boolean
      className: boolean
      time: boolean
      notes: $Enums.ListStudentNotes
      groupColor: boolean
    }, ExtArgs["result"]["list"]>
    composites: {}
  }


  type ListGetPayload<S extends boolean | null | undefined | ListDefaultArgs> = $Result.GetResult<Prisma.$ListPayload, S>

  type ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListCountAggregateInputType | true
    }

  export interface ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List'], meta: { name: 'List' } }
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ListFindUniqueArgs<ExtArgs>>
    ): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one List that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ListFindFirstArgs<ExtArgs>>
    ): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
    **/
    create<T extends ListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ListCreateArgs<ExtArgs>>
    ): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lists.
     *     @param {ListCreateManyArgs} args - Arguments to create many Lists.
     *     @example
     *     // Create many Lists
     *     const list = await prisma.list.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
    **/
    delete<T extends ListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ListDeleteArgs<ExtArgs>>
    ): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ListUpdateArgs<ExtArgs>>
    ): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
    **/
    upsert<T extends ListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ListUpsertArgs<ExtArgs>>
    ): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): Prisma.PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
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
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List model
   */
  readonly fields: ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Group<T extends List$GroupArgs<ExtArgs> = {}>(args?: Subset<T, List$GroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'> | Null>;

    activations<T extends List$activationsArgs<ExtArgs> = {}>(args?: Subset<T, List$activationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Visitation<T extends List$VisitationArgs<ExtArgs> = {}>(args?: Subset<T, List$VisitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Attendance<T extends List$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, List$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    ExceptionsOnLists<T extends List$ExceptionsOnListsArgs<ExtArgs> = {}>(args?: Subset<T, List$ExceptionsOnListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'findMany'> | Null>;

    DayNotes<T extends List$DayNotesArgs<ExtArgs> = {}>(args?: Subset<T, List$DayNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the List model
   */ 
  interface ListFieldRefs {
    readonly id: FieldRef<"List", 'Int'>
    readonly name: FieldRef<"List", 'String'>
    readonly isMainList: FieldRef<"List", 'Boolean'>
    readonly recordTime: FieldRef<"List", 'RecordTime'>
    readonly manageTime: FieldRef<"List", 'TimeManagement'>
    readonly studentName: FieldRef<"List", 'Boolean'>
    readonly className: FieldRef<"List", 'Boolean'>
    readonly time: FieldRef<"List", 'Boolean'>
    readonly notes: FieldRef<"List", 'ListStudentNotes'>
    readonly groupColor: FieldRef<"List", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * List findUnique
   */
  export type ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }


  /**
   * List findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }


  /**
   * List findFirst
   */
  export type ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }


  /**
   * List findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }


  /**
   * List findMany
   */
  export type ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }


  /**
   * List create
   */
  export type ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to create a List.
     */
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }


  /**
   * List createMany
   */
  export type ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * List update
   */
  export type ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to update a List.
     */
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     */
    where: ListWhereUniqueInput
  }


  /**
   * List updateMany
   */
  export type ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
  }


  /**
   * List upsert
   */
  export type ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The filter to search for the List to update in case it exists.
     */
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     */
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }


  /**
   * List delete
   */
  export type ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter which List to delete.
     */
    where: ListWhereUniqueInput
  }


  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListWhereInput
  }


  /**
   * List.Group
   */
  export type List$GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * List.activations
   */
  export type List$activationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    where?: ListActivationWhereInput
    orderBy?: ListActivationOrderByWithRelationInput | ListActivationOrderByWithRelationInput[]
    cursor?: ListActivationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListActivationScalarFieldEnum | ListActivationScalarFieldEnum[]
  }


  /**
   * List.Visitation
   */
  export type List$VisitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitation
     */
    select?: VisitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitationInclude<ExtArgs> | null
    where?: VisitationWhereInput
    orderBy?: VisitationOrderByWithRelationInput | VisitationOrderByWithRelationInput[]
    cursor?: VisitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitationScalarFieldEnum | VisitationScalarFieldEnum[]
  }


  /**
   * List.Attendance
   */
  export type List$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * List.ExceptionsOnLists
   */
  export type List$ExceptionsOnListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    where?: ExceptionsOnListsWhereInput
    orderBy?: ExceptionsOnListsOrderByWithRelationInput | ExceptionsOnListsOrderByWithRelationInput[]
    cursor?: ExceptionsOnListsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExceptionsOnListsScalarFieldEnum | ExceptionsOnListsScalarFieldEnum[]
  }


  /**
   * List.DayNotes
   */
  export type List$DayNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    where?: DayNotesWhereInput
    orderBy?: DayNotesOrderByWithRelationInput | DayNotesOrderByWithRelationInput[]
    cursor?: DayNotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayNotesScalarFieldEnum | DayNotesScalarFieldEnum[]
  }


  /**
   * List without action
   */
  export type ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
  }



  /**
   * Model DayNotes
   */

  export type AggregateDayNotes = {
    _count: DayNotesCountAggregateOutputType | null
    _avg: DayNotesAvgAggregateOutputType | null
    _sum: DayNotesSumAggregateOutputType | null
    _min: DayNotesMinAggregateOutputType | null
    _max: DayNotesMaxAggregateOutputType | null
  }

  export type DayNotesAvgAggregateOutputType = {
    id: number | null
    listId: number | null
  }

  export type DayNotesSumAggregateOutputType = {
    id: number | null
    listId: number | null
  }

  export type DayNotesMinAggregateOutputType = {
    id: number | null
    date: Date | null
    listId: number | null
    notes: string | null
  }

  export type DayNotesMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    listId: number | null
    notes: string | null
  }

  export type DayNotesCountAggregateOutputType = {
    id: number
    date: number
    listId: number
    notes: number
    _all: number
  }


  export type DayNotesAvgAggregateInputType = {
    id?: true
    listId?: true
  }

  export type DayNotesSumAggregateInputType = {
    id?: true
    listId?: true
  }

  export type DayNotesMinAggregateInputType = {
    id?: true
    date?: true
    listId?: true
    notes?: true
  }

  export type DayNotesMaxAggregateInputType = {
    id?: true
    date?: true
    listId?: true
    notes?: true
  }

  export type DayNotesCountAggregateInputType = {
    id?: true
    date?: true
    listId?: true
    notes?: true
    _all?: true
  }

  export type DayNotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayNotes to aggregate.
     */
    where?: DayNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayNotes to fetch.
     */
    orderBy?: DayNotesOrderByWithRelationInput | DayNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayNotes
    **/
    _count?: true | DayNotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayNotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayNotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayNotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayNotesMaxAggregateInputType
  }

  export type GetDayNotesAggregateType<T extends DayNotesAggregateArgs> = {
        [P in keyof T & keyof AggregateDayNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayNotes[P]>
      : GetScalarType<T[P], AggregateDayNotes[P]>
  }




  export type DayNotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayNotesWhereInput
    orderBy?: DayNotesOrderByWithAggregationInput | DayNotesOrderByWithAggregationInput[]
    by: DayNotesScalarFieldEnum[] | DayNotesScalarFieldEnum
    having?: DayNotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayNotesCountAggregateInputType | true
    _avg?: DayNotesAvgAggregateInputType
    _sum?: DayNotesSumAggregateInputType
    _min?: DayNotesMinAggregateInputType
    _max?: DayNotesMaxAggregateInputType
  }

  export type DayNotesGroupByOutputType = {
    id: number
    date: Date
    listId: number
    notes: string
    _count: DayNotesCountAggregateOutputType | null
    _avg: DayNotesAvgAggregateOutputType | null
    _sum: DayNotesSumAggregateOutputType | null
    _min: DayNotesMinAggregateOutputType | null
    _max: DayNotesMaxAggregateOutputType | null
  }

  type GetDayNotesGroupByPayload<T extends DayNotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayNotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayNotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayNotesGroupByOutputType[P]>
            : GetScalarType<T[P], DayNotesGroupByOutputType[P]>
        }
      >
    >


  export type DayNotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    listId?: boolean
    notes?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayNotes"]>

  export type DayNotesSelectScalar = {
    id?: boolean
    date?: boolean
    listId?: boolean
    notes?: boolean
  }

  export type DayNotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
  }


  export type $DayNotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayNotes"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      listId: number
      notes: string
    }, ExtArgs["result"]["dayNotes"]>
    composites: {}
  }


  type DayNotesGetPayload<S extends boolean | null | undefined | DayNotesDefaultArgs> = $Result.GetResult<Prisma.$DayNotesPayload, S>

  type DayNotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DayNotesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DayNotesCountAggregateInputType | true
    }

  export interface DayNotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayNotes'], meta: { name: 'DayNotes' } }
    /**
     * Find zero or one DayNotes that matches the filter.
     * @param {DayNotesFindUniqueArgs} args - Arguments to find a DayNotes
     * @example
     * // Get one DayNotes
     * const dayNotes = await prisma.dayNotes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayNotesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DayNotesFindUniqueArgs<ExtArgs>>
    ): Prisma__DayNotesClient<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DayNotes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DayNotesFindUniqueOrThrowArgs} args - Arguments to find a DayNotes
     * @example
     * // Get one DayNotes
     * const dayNotes = await prisma.dayNotes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DayNotesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayNotesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DayNotesClient<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DayNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayNotesFindFirstArgs} args - Arguments to find a DayNotes
     * @example
     * // Get one DayNotes
     * const dayNotes = await prisma.dayNotes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayNotesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DayNotesFindFirstArgs<ExtArgs>>
    ): Prisma__DayNotesClient<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DayNotes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayNotesFindFirstOrThrowArgs} args - Arguments to find a DayNotes
     * @example
     * // Get one DayNotes
     * const dayNotes = await prisma.dayNotes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DayNotesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayNotesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DayNotesClient<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DayNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayNotesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayNotes
     * const dayNotes = await prisma.dayNotes.findMany()
     * 
     * // Get first 10 DayNotes
     * const dayNotes = await prisma.dayNotes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayNotesWithIdOnly = await prisma.dayNotes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayNotesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayNotesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DayNotes.
     * @param {DayNotesCreateArgs} args - Arguments to create a DayNotes.
     * @example
     * // Create one DayNotes
     * const DayNotes = await prisma.dayNotes.create({
     *   data: {
     *     // ... data to create a DayNotes
     *   }
     * })
     * 
    **/
    create<T extends DayNotesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DayNotesCreateArgs<ExtArgs>>
    ): Prisma__DayNotesClient<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DayNotes.
     *     @param {DayNotesCreateManyArgs} args - Arguments to create many DayNotes.
     *     @example
     *     // Create many DayNotes
     *     const dayNotes = await prisma.dayNotes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DayNotesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayNotesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DayNotes.
     * @param {DayNotesDeleteArgs} args - Arguments to delete one DayNotes.
     * @example
     * // Delete one DayNotes
     * const DayNotes = await prisma.dayNotes.delete({
     *   where: {
     *     // ... filter to delete one DayNotes
     *   }
     * })
     * 
    **/
    delete<T extends DayNotesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DayNotesDeleteArgs<ExtArgs>>
    ): Prisma__DayNotesClient<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DayNotes.
     * @param {DayNotesUpdateArgs} args - Arguments to update one DayNotes.
     * @example
     * // Update one DayNotes
     * const dayNotes = await prisma.dayNotes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayNotesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DayNotesUpdateArgs<ExtArgs>>
    ): Prisma__DayNotesClient<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DayNotes.
     * @param {DayNotesDeleteManyArgs} args - Arguments to filter DayNotes to delete.
     * @example
     * // Delete a few DayNotes
     * const { count } = await prisma.dayNotes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayNotesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayNotesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayNotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayNotes
     * const dayNotes = await prisma.dayNotes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayNotesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DayNotesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DayNotes.
     * @param {DayNotesUpsertArgs} args - Arguments to update or create a DayNotes.
     * @example
     * // Update or create a DayNotes
     * const dayNotes = await prisma.dayNotes.upsert({
     *   create: {
     *     // ... data to create a DayNotes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayNotes we want to update
     *   }
     * })
    **/
    upsert<T extends DayNotesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DayNotesUpsertArgs<ExtArgs>>
    ): Prisma__DayNotesClient<$Result.GetResult<Prisma.$DayNotesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DayNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayNotesCountArgs} args - Arguments to filter DayNotes to count.
     * @example
     * // Count the number of DayNotes
     * const count = await prisma.dayNotes.count({
     *   where: {
     *     // ... the filter for the DayNotes we want to count
     *   }
     * })
    **/
    count<T extends DayNotesCountArgs>(
      args?: Subset<T, DayNotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayNotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayNotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DayNotesAggregateArgs>(args: Subset<T, DayNotesAggregateArgs>): Prisma.PrismaPromise<GetDayNotesAggregateType<T>>

    /**
     * Group by DayNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayNotesGroupByArgs} args - Group by arguments.
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
      T extends DayNotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayNotesGroupByArgs['orderBy'] }
        : { orderBy?: DayNotesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DayNotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayNotes model
   */
  readonly fields: DayNotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayNotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayNotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DayNotes model
   */ 
  interface DayNotesFieldRefs {
    readonly id: FieldRef<"DayNotes", 'Int'>
    readonly date: FieldRef<"DayNotes", 'DateTime'>
    readonly listId: FieldRef<"DayNotes", 'Int'>
    readonly notes: FieldRef<"DayNotes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DayNotes findUnique
   */
  export type DayNotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * Filter, which DayNotes to fetch.
     */
    where: DayNotesWhereUniqueInput
  }


  /**
   * DayNotes findUniqueOrThrow
   */
  export type DayNotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * Filter, which DayNotes to fetch.
     */
    where: DayNotesWhereUniqueInput
  }


  /**
   * DayNotes findFirst
   */
  export type DayNotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * Filter, which DayNotes to fetch.
     */
    where?: DayNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayNotes to fetch.
     */
    orderBy?: DayNotesOrderByWithRelationInput | DayNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayNotes.
     */
    cursor?: DayNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayNotes.
     */
    distinct?: DayNotesScalarFieldEnum | DayNotesScalarFieldEnum[]
  }


  /**
   * DayNotes findFirstOrThrow
   */
  export type DayNotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * Filter, which DayNotes to fetch.
     */
    where?: DayNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayNotes to fetch.
     */
    orderBy?: DayNotesOrderByWithRelationInput | DayNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayNotes.
     */
    cursor?: DayNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayNotes.
     */
    distinct?: DayNotesScalarFieldEnum | DayNotesScalarFieldEnum[]
  }


  /**
   * DayNotes findMany
   */
  export type DayNotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * Filter, which DayNotes to fetch.
     */
    where?: DayNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayNotes to fetch.
     */
    orderBy?: DayNotesOrderByWithRelationInput | DayNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayNotes.
     */
    cursor?: DayNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayNotes.
     */
    skip?: number
    distinct?: DayNotesScalarFieldEnum | DayNotesScalarFieldEnum[]
  }


  /**
   * DayNotes create
   */
  export type DayNotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * The data needed to create a DayNotes.
     */
    data: XOR<DayNotesCreateInput, DayNotesUncheckedCreateInput>
  }


  /**
   * DayNotes createMany
   */
  export type DayNotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayNotes.
     */
    data: DayNotesCreateManyInput | DayNotesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DayNotes update
   */
  export type DayNotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * The data needed to update a DayNotes.
     */
    data: XOR<DayNotesUpdateInput, DayNotesUncheckedUpdateInput>
    /**
     * Choose, which DayNotes to update.
     */
    where: DayNotesWhereUniqueInput
  }


  /**
   * DayNotes updateMany
   */
  export type DayNotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayNotes.
     */
    data: XOR<DayNotesUpdateManyMutationInput, DayNotesUncheckedUpdateManyInput>
    /**
     * Filter which DayNotes to update
     */
    where?: DayNotesWhereInput
  }


  /**
   * DayNotes upsert
   */
  export type DayNotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * The filter to search for the DayNotes to update in case it exists.
     */
    where: DayNotesWhereUniqueInput
    /**
     * In case the DayNotes found by the `where` argument doesn't exist, create a new DayNotes with this data.
     */
    create: XOR<DayNotesCreateInput, DayNotesUncheckedCreateInput>
    /**
     * In case the DayNotes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayNotesUpdateInput, DayNotesUncheckedUpdateInput>
  }


  /**
   * DayNotes delete
   */
  export type DayNotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
    /**
     * Filter which DayNotes to delete.
     */
    where: DayNotesWhereUniqueInput
  }


  /**
   * DayNotes deleteMany
   */
  export type DayNotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayNotes to delete
     */
    where?: DayNotesWhereInput
  }


  /**
   * DayNotes without action
   */
  export type DayNotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayNotes
     */
    select?: DayNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayNotesInclude<ExtArgs> | null
  }



  /**
   * Model ListActivation
   */

  export type AggregateListActivation = {
    _count: ListActivationCountAggregateOutputType | null
    _avg: ListActivationAvgAggregateOutputType | null
    _sum: ListActivationSumAggregateOutputType | null
    _min: ListActivationMinAggregateOutputType | null
    _max: ListActivationMaxAggregateOutputType | null
  }

  export type ListActivationAvgAggregateOutputType = {
    id: number | null
    day: number | null
    startTime: number | null
    startBuffer: number | null
    endTime: number | null
    endBuffer: number | null
    listId: number | null
  }

  export type ListActivationSumAggregateOutputType = {
    id: number | null
    day: number | null
    startTime: number | null
    startBuffer: number | null
    endTime: number | null
    endBuffer: number | null
    listId: number | null
  }

  export type ListActivationMinAggregateOutputType = {
    id: number | null
    day: number | null
    startTime: number | null
    startBuffer: number | null
    endTime: number | null
    endBuffer: number | null
    listId: number | null
  }

  export type ListActivationMaxAggregateOutputType = {
    id: number | null
    day: number | null
    startTime: number | null
    startBuffer: number | null
    endTime: number | null
    endBuffer: number | null
    listId: number | null
  }

  export type ListActivationCountAggregateOutputType = {
    id: number
    day: number
    startTime: number
    startBuffer: number
    endTime: number
    endBuffer: number
    listId: number
    _all: number
  }


  export type ListActivationAvgAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    startBuffer?: true
    endTime?: true
    endBuffer?: true
    listId?: true
  }

  export type ListActivationSumAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    startBuffer?: true
    endTime?: true
    endBuffer?: true
    listId?: true
  }

  export type ListActivationMinAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    startBuffer?: true
    endTime?: true
    endBuffer?: true
    listId?: true
  }

  export type ListActivationMaxAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    startBuffer?: true
    endTime?: true
    endBuffer?: true
    listId?: true
  }

  export type ListActivationCountAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    startBuffer?: true
    endTime?: true
    endBuffer?: true
    listId?: true
    _all?: true
  }

  export type ListActivationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListActivation to aggregate.
     */
    where?: ListActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListActivations to fetch.
     */
    orderBy?: ListActivationOrderByWithRelationInput | ListActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListActivations
    **/
    _count?: true | ListActivationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListActivationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListActivationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListActivationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListActivationMaxAggregateInputType
  }

  export type GetListActivationAggregateType<T extends ListActivationAggregateArgs> = {
        [P in keyof T & keyof AggregateListActivation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListActivation[P]>
      : GetScalarType<T[P], AggregateListActivation[P]>
  }




  export type ListActivationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListActivationWhereInput
    orderBy?: ListActivationOrderByWithAggregationInput | ListActivationOrderByWithAggregationInput[]
    by: ListActivationScalarFieldEnum[] | ListActivationScalarFieldEnum
    having?: ListActivationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListActivationCountAggregateInputType | true
    _avg?: ListActivationAvgAggregateInputType
    _sum?: ListActivationSumAggregateInputType
    _min?: ListActivationMinAggregateInputType
    _max?: ListActivationMaxAggregateInputType
  }

  export type ListActivationGroupByOutputType = {
    id: number
    day: number
    startTime: number
    startBuffer: number
    endTime: number
    endBuffer: number
    listId: number | null
    _count: ListActivationCountAggregateOutputType | null
    _avg: ListActivationAvgAggregateOutputType | null
    _sum: ListActivationSumAggregateOutputType | null
    _min: ListActivationMinAggregateOutputType | null
    _max: ListActivationMaxAggregateOutputType | null
  }

  type GetListActivationGroupByPayload<T extends ListActivationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListActivationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListActivationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListActivationGroupByOutputType[P]>
            : GetScalarType<T[P], ListActivationGroupByOutputType[P]>
        }
      >
    >


  export type ListActivationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    startTime?: boolean
    startBuffer?: boolean
    endTime?: boolean
    endBuffer?: boolean
    listId?: boolean
    List?: boolean | ListActivation$ListArgs<ExtArgs>
  }, ExtArgs["result"]["listActivation"]>

  export type ListActivationSelectScalar = {
    id?: boolean
    day?: boolean
    startTime?: boolean
    startBuffer?: boolean
    endTime?: boolean
    endBuffer?: boolean
    listId?: boolean
  }

  export type ListActivationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    List?: boolean | ListActivation$ListArgs<ExtArgs>
  }


  export type $ListActivationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListActivation"
    objects: {
      List: Prisma.$ListPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      day: number
      startTime: number
      startBuffer: number
      endTime: number
      endBuffer: number
      listId: number | null
    }, ExtArgs["result"]["listActivation"]>
    composites: {}
  }


  type ListActivationGetPayload<S extends boolean | null | undefined | ListActivationDefaultArgs> = $Result.GetResult<Prisma.$ListActivationPayload, S>

  type ListActivationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListActivationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListActivationCountAggregateInputType | true
    }

  export interface ListActivationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListActivation'], meta: { name: 'ListActivation' } }
    /**
     * Find zero or one ListActivation that matches the filter.
     * @param {ListActivationFindUniqueArgs} args - Arguments to find a ListActivation
     * @example
     * // Get one ListActivation
     * const listActivation = await prisma.listActivation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListActivationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ListActivationFindUniqueArgs<ExtArgs>>
    ): Prisma__ListActivationClient<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ListActivation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ListActivationFindUniqueOrThrowArgs} args - Arguments to find a ListActivation
     * @example
     * // Get one ListActivation
     * const listActivation = await prisma.listActivation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListActivationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListActivationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ListActivationClient<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ListActivation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListActivationFindFirstArgs} args - Arguments to find a ListActivation
     * @example
     * // Get one ListActivation
     * const listActivation = await prisma.listActivation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListActivationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ListActivationFindFirstArgs<ExtArgs>>
    ): Prisma__ListActivationClient<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ListActivation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListActivationFindFirstOrThrowArgs} args - Arguments to find a ListActivation
     * @example
     * // Get one ListActivation
     * const listActivation = await prisma.listActivation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListActivationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ListActivationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ListActivationClient<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ListActivations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListActivationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListActivations
     * const listActivations = await prisma.listActivation.findMany()
     * 
     * // Get first 10 ListActivations
     * const listActivations = await prisma.listActivation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listActivationWithIdOnly = await prisma.listActivation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListActivationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListActivationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ListActivation.
     * @param {ListActivationCreateArgs} args - Arguments to create a ListActivation.
     * @example
     * // Create one ListActivation
     * const ListActivation = await prisma.listActivation.create({
     *   data: {
     *     // ... data to create a ListActivation
     *   }
     * })
     * 
    **/
    create<T extends ListActivationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ListActivationCreateArgs<ExtArgs>>
    ): Prisma__ListActivationClient<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ListActivations.
     *     @param {ListActivationCreateManyArgs} args - Arguments to create many ListActivations.
     *     @example
     *     // Create many ListActivations
     *     const listActivation = await prisma.listActivation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ListActivationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListActivationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ListActivation.
     * @param {ListActivationDeleteArgs} args - Arguments to delete one ListActivation.
     * @example
     * // Delete one ListActivation
     * const ListActivation = await prisma.listActivation.delete({
     *   where: {
     *     // ... filter to delete one ListActivation
     *   }
     * })
     * 
    **/
    delete<T extends ListActivationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ListActivationDeleteArgs<ExtArgs>>
    ): Prisma__ListActivationClient<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ListActivation.
     * @param {ListActivationUpdateArgs} args - Arguments to update one ListActivation.
     * @example
     * // Update one ListActivation
     * const listActivation = await prisma.listActivation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListActivationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ListActivationUpdateArgs<ExtArgs>>
    ): Prisma__ListActivationClient<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ListActivations.
     * @param {ListActivationDeleteManyArgs} args - Arguments to filter ListActivations to delete.
     * @example
     * // Delete a few ListActivations
     * const { count } = await prisma.listActivation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListActivationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ListActivationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListActivations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListActivationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListActivations
     * const listActivation = await prisma.listActivation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListActivationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ListActivationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListActivation.
     * @param {ListActivationUpsertArgs} args - Arguments to update or create a ListActivation.
     * @example
     * // Update or create a ListActivation
     * const listActivation = await prisma.listActivation.upsert({
     *   create: {
     *     // ... data to create a ListActivation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListActivation we want to update
     *   }
     * })
    **/
    upsert<T extends ListActivationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ListActivationUpsertArgs<ExtArgs>>
    ): Prisma__ListActivationClient<$Result.GetResult<Prisma.$ListActivationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ListActivations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListActivationCountArgs} args - Arguments to filter ListActivations to count.
     * @example
     * // Count the number of ListActivations
     * const count = await prisma.listActivation.count({
     *   where: {
     *     // ... the filter for the ListActivations we want to count
     *   }
     * })
    **/
    count<T extends ListActivationCountArgs>(
      args?: Subset<T, ListActivationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListActivationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListActivation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListActivationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListActivationAggregateArgs>(args: Subset<T, ListActivationAggregateArgs>): Prisma.PrismaPromise<GetListActivationAggregateType<T>>

    /**
     * Group by ListActivation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListActivationGroupByArgs} args - Group by arguments.
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
      T extends ListActivationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListActivationGroupByArgs['orderBy'] }
        : { orderBy?: ListActivationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListActivationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListActivationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListActivation model
   */
  readonly fields: ListActivationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListActivation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListActivationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    List<T extends ListActivation$ListArgs<ExtArgs> = {}>(args?: Subset<T, ListActivation$ListArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ListActivation model
   */ 
  interface ListActivationFieldRefs {
    readonly id: FieldRef<"ListActivation", 'Int'>
    readonly day: FieldRef<"ListActivation", 'Int'>
    readonly startTime: FieldRef<"ListActivation", 'Int'>
    readonly startBuffer: FieldRef<"ListActivation", 'Int'>
    readonly endTime: FieldRef<"ListActivation", 'Int'>
    readonly endBuffer: FieldRef<"ListActivation", 'Int'>
    readonly listId: FieldRef<"ListActivation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ListActivation findUnique
   */
  export type ListActivationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * Filter, which ListActivation to fetch.
     */
    where: ListActivationWhereUniqueInput
  }


  /**
   * ListActivation findUniqueOrThrow
   */
  export type ListActivationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * Filter, which ListActivation to fetch.
     */
    where: ListActivationWhereUniqueInput
  }


  /**
   * ListActivation findFirst
   */
  export type ListActivationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * Filter, which ListActivation to fetch.
     */
    where?: ListActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListActivations to fetch.
     */
    orderBy?: ListActivationOrderByWithRelationInput | ListActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListActivations.
     */
    cursor?: ListActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListActivations.
     */
    distinct?: ListActivationScalarFieldEnum | ListActivationScalarFieldEnum[]
  }


  /**
   * ListActivation findFirstOrThrow
   */
  export type ListActivationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * Filter, which ListActivation to fetch.
     */
    where?: ListActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListActivations to fetch.
     */
    orderBy?: ListActivationOrderByWithRelationInput | ListActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListActivations.
     */
    cursor?: ListActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListActivations.
     */
    distinct?: ListActivationScalarFieldEnum | ListActivationScalarFieldEnum[]
  }


  /**
   * ListActivation findMany
   */
  export type ListActivationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * Filter, which ListActivations to fetch.
     */
    where?: ListActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListActivations to fetch.
     */
    orderBy?: ListActivationOrderByWithRelationInput | ListActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListActivations.
     */
    cursor?: ListActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListActivations.
     */
    skip?: number
    distinct?: ListActivationScalarFieldEnum | ListActivationScalarFieldEnum[]
  }


  /**
   * ListActivation create
   */
  export type ListActivationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * The data needed to create a ListActivation.
     */
    data: XOR<ListActivationCreateInput, ListActivationUncheckedCreateInput>
  }


  /**
   * ListActivation createMany
   */
  export type ListActivationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListActivations.
     */
    data: ListActivationCreateManyInput | ListActivationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ListActivation update
   */
  export type ListActivationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * The data needed to update a ListActivation.
     */
    data: XOR<ListActivationUpdateInput, ListActivationUncheckedUpdateInput>
    /**
     * Choose, which ListActivation to update.
     */
    where: ListActivationWhereUniqueInput
  }


  /**
   * ListActivation updateMany
   */
  export type ListActivationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListActivations.
     */
    data: XOR<ListActivationUpdateManyMutationInput, ListActivationUncheckedUpdateManyInput>
    /**
     * Filter which ListActivations to update
     */
    where?: ListActivationWhereInput
  }


  /**
   * ListActivation upsert
   */
  export type ListActivationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * The filter to search for the ListActivation to update in case it exists.
     */
    where: ListActivationWhereUniqueInput
    /**
     * In case the ListActivation found by the `where` argument doesn't exist, create a new ListActivation with this data.
     */
    create: XOR<ListActivationCreateInput, ListActivationUncheckedCreateInput>
    /**
     * In case the ListActivation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListActivationUpdateInput, ListActivationUncheckedUpdateInput>
  }


  /**
   * ListActivation delete
   */
  export type ListActivationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
    /**
     * Filter which ListActivation to delete.
     */
    where: ListActivationWhereUniqueInput
  }


  /**
   * ListActivation deleteMany
   */
  export type ListActivationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListActivations to delete
     */
    where?: ListActivationWhereInput
  }


  /**
   * ListActivation.List
   */
  export type ListActivation$ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
  }


  /**
   * ListActivation without action
   */
  export type ListActivationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListActivation
     */
    select?: ListActivationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListActivationInclude<ExtArgs> | null
  }



  /**
   * Model ExceptionsOnLists
   */

  export type AggregateExceptionsOnLists = {
    _count: ExceptionsOnListsCountAggregateOutputType | null
    _avg: ExceptionsOnListsAvgAggregateOutputType | null
    _sum: ExceptionsOnListsSumAggregateOutputType | null
    _min: ExceptionsOnListsMinAggregateOutputType | null
    _max: ExceptionsOnListsMaxAggregateOutputType | null
  }

  export type ExceptionsOnListsAvgAggregateOutputType = {
    exceptionId: number | null
    listId: number | null
  }

  export type ExceptionsOnListsSumAggregateOutputType = {
    exceptionId: number | null
    listId: number | null
  }

  export type ExceptionsOnListsMinAggregateOutputType = {
    exceptionId: number | null
    listId: number | null
  }

  export type ExceptionsOnListsMaxAggregateOutputType = {
    exceptionId: number | null
    listId: number | null
  }

  export type ExceptionsOnListsCountAggregateOutputType = {
    exceptionId: number
    listId: number
    _all: number
  }


  export type ExceptionsOnListsAvgAggregateInputType = {
    exceptionId?: true
    listId?: true
  }

  export type ExceptionsOnListsSumAggregateInputType = {
    exceptionId?: true
    listId?: true
  }

  export type ExceptionsOnListsMinAggregateInputType = {
    exceptionId?: true
    listId?: true
  }

  export type ExceptionsOnListsMaxAggregateInputType = {
    exceptionId?: true
    listId?: true
  }

  export type ExceptionsOnListsCountAggregateInputType = {
    exceptionId?: true
    listId?: true
    _all?: true
  }

  export type ExceptionsOnListsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExceptionsOnLists to aggregate.
     */
    where?: ExceptionsOnListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExceptionsOnLists to fetch.
     */
    orderBy?: ExceptionsOnListsOrderByWithRelationInput | ExceptionsOnListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExceptionsOnListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExceptionsOnLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExceptionsOnLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExceptionsOnLists
    **/
    _count?: true | ExceptionsOnListsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExceptionsOnListsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExceptionsOnListsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExceptionsOnListsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExceptionsOnListsMaxAggregateInputType
  }

  export type GetExceptionsOnListsAggregateType<T extends ExceptionsOnListsAggregateArgs> = {
        [P in keyof T & keyof AggregateExceptionsOnLists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExceptionsOnLists[P]>
      : GetScalarType<T[P], AggregateExceptionsOnLists[P]>
  }




  export type ExceptionsOnListsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionsOnListsWhereInput
    orderBy?: ExceptionsOnListsOrderByWithAggregationInput | ExceptionsOnListsOrderByWithAggregationInput[]
    by: ExceptionsOnListsScalarFieldEnum[] | ExceptionsOnListsScalarFieldEnum
    having?: ExceptionsOnListsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExceptionsOnListsCountAggregateInputType | true
    _avg?: ExceptionsOnListsAvgAggregateInputType
    _sum?: ExceptionsOnListsSumAggregateInputType
    _min?: ExceptionsOnListsMinAggregateInputType
    _max?: ExceptionsOnListsMaxAggregateInputType
  }

  export type ExceptionsOnListsGroupByOutputType = {
    exceptionId: number
    listId: number
    _count: ExceptionsOnListsCountAggregateOutputType | null
    _avg: ExceptionsOnListsAvgAggregateOutputType | null
    _sum: ExceptionsOnListsSumAggregateOutputType | null
    _min: ExceptionsOnListsMinAggregateOutputType | null
    _max: ExceptionsOnListsMaxAggregateOutputType | null
  }

  type GetExceptionsOnListsGroupByPayload<T extends ExceptionsOnListsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExceptionsOnListsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExceptionsOnListsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExceptionsOnListsGroupByOutputType[P]>
            : GetScalarType<T[P], ExceptionsOnListsGroupByOutputType[P]>
        }
      >
    >


  export type ExceptionsOnListsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exceptionId?: boolean
    listId?: boolean
    exception?: boolean | ExceptionDefaultArgs<ExtArgs>
    list?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exceptionsOnLists"]>

  export type ExceptionsOnListsSelectScalar = {
    exceptionId?: boolean
    listId?: boolean
  }

  export type ExceptionsOnListsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exception?: boolean | ExceptionDefaultArgs<ExtArgs>
    list?: boolean | ListDefaultArgs<ExtArgs>
  }


  export type $ExceptionsOnListsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExceptionsOnLists"
    objects: {
      exception: Prisma.$ExceptionPayload<ExtArgs>
      list: Prisma.$ListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      exceptionId: number
      listId: number
    }, ExtArgs["result"]["exceptionsOnLists"]>
    composites: {}
  }


  type ExceptionsOnListsGetPayload<S extends boolean | null | undefined | ExceptionsOnListsDefaultArgs> = $Result.GetResult<Prisma.$ExceptionsOnListsPayload, S>

  type ExceptionsOnListsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExceptionsOnListsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExceptionsOnListsCountAggregateInputType | true
    }

  export interface ExceptionsOnListsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExceptionsOnLists'], meta: { name: 'ExceptionsOnLists' } }
    /**
     * Find zero or one ExceptionsOnLists that matches the filter.
     * @param {ExceptionsOnListsFindUniqueArgs} args - Arguments to find a ExceptionsOnLists
     * @example
     * // Get one ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExceptionsOnListsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionsOnListsFindUniqueArgs<ExtArgs>>
    ): Prisma__ExceptionsOnListsClient<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExceptionsOnLists that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExceptionsOnListsFindUniqueOrThrowArgs} args - Arguments to find a ExceptionsOnLists
     * @example
     * // Get one ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExceptionsOnListsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionsOnListsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExceptionsOnListsClient<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExceptionsOnLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionsOnListsFindFirstArgs} args - Arguments to find a ExceptionsOnLists
     * @example
     * // Get one ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExceptionsOnListsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionsOnListsFindFirstArgs<ExtArgs>>
    ): Prisma__ExceptionsOnListsClient<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExceptionsOnLists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionsOnListsFindFirstOrThrowArgs} args - Arguments to find a ExceptionsOnLists
     * @example
     * // Get one ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExceptionsOnListsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionsOnListsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExceptionsOnListsClient<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExceptionsOnLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionsOnListsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.findMany()
     * 
     * // Get first 10 ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.findMany({ take: 10 })
     * 
     * // Only select the `exceptionId`
     * const exceptionsOnListsWithExceptionIdOnly = await prisma.exceptionsOnLists.findMany({ select: { exceptionId: true } })
     * 
    **/
    findMany<T extends ExceptionsOnListsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionsOnListsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExceptionsOnLists.
     * @param {ExceptionsOnListsCreateArgs} args - Arguments to create a ExceptionsOnLists.
     * @example
     * // Create one ExceptionsOnLists
     * const ExceptionsOnLists = await prisma.exceptionsOnLists.create({
     *   data: {
     *     // ... data to create a ExceptionsOnLists
     *   }
     * })
     * 
    **/
    create<T extends ExceptionsOnListsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionsOnListsCreateArgs<ExtArgs>>
    ): Prisma__ExceptionsOnListsClient<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExceptionsOnLists.
     *     @param {ExceptionsOnListsCreateManyArgs} args - Arguments to create many ExceptionsOnLists.
     *     @example
     *     // Create many ExceptionsOnLists
     *     const exceptionsOnLists = await prisma.exceptionsOnLists.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExceptionsOnListsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionsOnListsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExceptionsOnLists.
     * @param {ExceptionsOnListsDeleteArgs} args - Arguments to delete one ExceptionsOnLists.
     * @example
     * // Delete one ExceptionsOnLists
     * const ExceptionsOnLists = await prisma.exceptionsOnLists.delete({
     *   where: {
     *     // ... filter to delete one ExceptionsOnLists
     *   }
     * })
     * 
    **/
    delete<T extends ExceptionsOnListsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionsOnListsDeleteArgs<ExtArgs>>
    ): Prisma__ExceptionsOnListsClient<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExceptionsOnLists.
     * @param {ExceptionsOnListsUpdateArgs} args - Arguments to update one ExceptionsOnLists.
     * @example
     * // Update one ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExceptionsOnListsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionsOnListsUpdateArgs<ExtArgs>>
    ): Prisma__ExceptionsOnListsClient<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExceptionsOnLists.
     * @param {ExceptionsOnListsDeleteManyArgs} args - Arguments to filter ExceptionsOnLists to delete.
     * @example
     * // Delete a few ExceptionsOnLists
     * const { count } = await prisma.exceptionsOnLists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExceptionsOnListsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionsOnListsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExceptionsOnLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionsOnListsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExceptionsOnListsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionsOnListsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExceptionsOnLists.
     * @param {ExceptionsOnListsUpsertArgs} args - Arguments to update or create a ExceptionsOnLists.
     * @example
     * // Update or create a ExceptionsOnLists
     * const exceptionsOnLists = await prisma.exceptionsOnLists.upsert({
     *   create: {
     *     // ... data to create a ExceptionsOnLists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExceptionsOnLists we want to update
     *   }
     * })
    **/
    upsert<T extends ExceptionsOnListsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionsOnListsUpsertArgs<ExtArgs>>
    ): Prisma__ExceptionsOnListsClient<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExceptionsOnLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionsOnListsCountArgs} args - Arguments to filter ExceptionsOnLists to count.
     * @example
     * // Count the number of ExceptionsOnLists
     * const count = await prisma.exceptionsOnLists.count({
     *   where: {
     *     // ... the filter for the ExceptionsOnLists we want to count
     *   }
     * })
    **/
    count<T extends ExceptionsOnListsCountArgs>(
      args?: Subset<T, ExceptionsOnListsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExceptionsOnListsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExceptionsOnLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionsOnListsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExceptionsOnListsAggregateArgs>(args: Subset<T, ExceptionsOnListsAggregateArgs>): Prisma.PrismaPromise<GetExceptionsOnListsAggregateType<T>>

    /**
     * Group by ExceptionsOnLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionsOnListsGroupByArgs} args - Group by arguments.
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
      T extends ExceptionsOnListsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExceptionsOnListsGroupByArgs['orderBy'] }
        : { orderBy?: ExceptionsOnListsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExceptionsOnListsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExceptionsOnListsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExceptionsOnLists model
   */
  readonly fields: ExceptionsOnListsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExceptionsOnLists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExceptionsOnListsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    exception<T extends ExceptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExceptionDefaultArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExceptionsOnLists model
   */ 
  interface ExceptionsOnListsFieldRefs {
    readonly exceptionId: FieldRef<"ExceptionsOnLists", 'Int'>
    readonly listId: FieldRef<"ExceptionsOnLists", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ExceptionsOnLists findUnique
   */
  export type ExceptionsOnListsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionsOnLists to fetch.
     */
    where: ExceptionsOnListsWhereUniqueInput
  }


  /**
   * ExceptionsOnLists findUniqueOrThrow
   */
  export type ExceptionsOnListsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionsOnLists to fetch.
     */
    where: ExceptionsOnListsWhereUniqueInput
  }


  /**
   * ExceptionsOnLists findFirst
   */
  export type ExceptionsOnListsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionsOnLists to fetch.
     */
    where?: ExceptionsOnListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExceptionsOnLists to fetch.
     */
    orderBy?: ExceptionsOnListsOrderByWithRelationInput | ExceptionsOnListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExceptionsOnLists.
     */
    cursor?: ExceptionsOnListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExceptionsOnLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExceptionsOnLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExceptionsOnLists.
     */
    distinct?: ExceptionsOnListsScalarFieldEnum | ExceptionsOnListsScalarFieldEnum[]
  }


  /**
   * ExceptionsOnLists findFirstOrThrow
   */
  export type ExceptionsOnListsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionsOnLists to fetch.
     */
    where?: ExceptionsOnListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExceptionsOnLists to fetch.
     */
    orderBy?: ExceptionsOnListsOrderByWithRelationInput | ExceptionsOnListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExceptionsOnLists.
     */
    cursor?: ExceptionsOnListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExceptionsOnLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExceptionsOnLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExceptionsOnLists.
     */
    distinct?: ExceptionsOnListsScalarFieldEnum | ExceptionsOnListsScalarFieldEnum[]
  }


  /**
   * ExceptionsOnLists findMany
   */
  export type ExceptionsOnListsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionsOnLists to fetch.
     */
    where?: ExceptionsOnListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExceptionsOnLists to fetch.
     */
    orderBy?: ExceptionsOnListsOrderByWithRelationInput | ExceptionsOnListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExceptionsOnLists.
     */
    cursor?: ExceptionsOnListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExceptionsOnLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExceptionsOnLists.
     */
    skip?: number
    distinct?: ExceptionsOnListsScalarFieldEnum | ExceptionsOnListsScalarFieldEnum[]
  }


  /**
   * ExceptionsOnLists create
   */
  export type ExceptionsOnListsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * The data needed to create a ExceptionsOnLists.
     */
    data: XOR<ExceptionsOnListsCreateInput, ExceptionsOnListsUncheckedCreateInput>
  }


  /**
   * ExceptionsOnLists createMany
   */
  export type ExceptionsOnListsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExceptionsOnLists.
     */
    data: ExceptionsOnListsCreateManyInput | ExceptionsOnListsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ExceptionsOnLists update
   */
  export type ExceptionsOnListsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * The data needed to update a ExceptionsOnLists.
     */
    data: XOR<ExceptionsOnListsUpdateInput, ExceptionsOnListsUncheckedUpdateInput>
    /**
     * Choose, which ExceptionsOnLists to update.
     */
    where: ExceptionsOnListsWhereUniqueInput
  }


  /**
   * ExceptionsOnLists updateMany
   */
  export type ExceptionsOnListsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExceptionsOnLists.
     */
    data: XOR<ExceptionsOnListsUpdateManyMutationInput, ExceptionsOnListsUncheckedUpdateManyInput>
    /**
     * Filter which ExceptionsOnLists to update
     */
    where?: ExceptionsOnListsWhereInput
  }


  /**
   * ExceptionsOnLists upsert
   */
  export type ExceptionsOnListsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * The filter to search for the ExceptionsOnLists to update in case it exists.
     */
    where: ExceptionsOnListsWhereUniqueInput
    /**
     * In case the ExceptionsOnLists found by the `where` argument doesn't exist, create a new ExceptionsOnLists with this data.
     */
    create: XOR<ExceptionsOnListsCreateInput, ExceptionsOnListsUncheckedCreateInput>
    /**
     * In case the ExceptionsOnLists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExceptionsOnListsUpdateInput, ExceptionsOnListsUncheckedUpdateInput>
  }


  /**
   * ExceptionsOnLists delete
   */
  export type ExceptionsOnListsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    /**
     * Filter which ExceptionsOnLists to delete.
     */
    where: ExceptionsOnListsWhereUniqueInput
  }


  /**
   * ExceptionsOnLists deleteMany
   */
  export type ExceptionsOnListsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExceptionsOnLists to delete
     */
    where?: ExceptionsOnListsWhereInput
  }


  /**
   * ExceptionsOnLists without action
   */
  export type ExceptionsOnListsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
  }



  /**
   * Model Exception
   */

  export type AggregateException = {
    _count: ExceptionCountAggregateOutputType | null
    _avg: ExceptionAvgAggregateOutputType | null
    _sum: ExceptionSumAggregateOutputType | null
    _min: ExceptionMinAggregateOutputType | null
    _max: ExceptionMaxAggregateOutputType | null
  }

  export type ExceptionAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    end: number | null
  }

  export type ExceptionSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    end: number | null
  }

  export type ExceptionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    startDate: Date | null
    endDate: Date | null
    studentId: number | null
    presence: $Enums.ExceptionPresence | null
    end: number | null
    notes: string | null
  }

  export type ExceptionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    startDate: Date | null
    endDate: Date | null
    studentId: number | null
    presence: $Enums.ExceptionPresence | null
    end: number | null
    notes: string | null
  }

  export type ExceptionCountAggregateOutputType = {
    id: number
    createdAt: number
    startDate: number
    endDate: number
    studentId: number
    presence: number
    end: number
    notes: number
    _all: number
  }


  export type ExceptionAvgAggregateInputType = {
    id?: true
    studentId?: true
    end?: true
  }

  export type ExceptionSumAggregateInputType = {
    id?: true
    studentId?: true
    end?: true
  }

  export type ExceptionMinAggregateInputType = {
    id?: true
    createdAt?: true
    startDate?: true
    endDate?: true
    studentId?: true
    presence?: true
    end?: true
    notes?: true
  }

  export type ExceptionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    startDate?: true
    endDate?: true
    studentId?: true
    presence?: true
    end?: true
    notes?: true
  }

  export type ExceptionCountAggregateInputType = {
    id?: true
    createdAt?: true
    startDate?: true
    endDate?: true
    studentId?: true
    presence?: true
    end?: true
    notes?: true
    _all?: true
  }

  export type ExceptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exception to aggregate.
     */
    where?: ExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exceptions to fetch.
     */
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exceptions
    **/
    _count?: true | ExceptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExceptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExceptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExceptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExceptionMaxAggregateInputType
  }

  export type GetExceptionAggregateType<T extends ExceptionAggregateArgs> = {
        [P in keyof T & keyof AggregateException]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateException[P]>
      : GetScalarType<T[P], AggregateException[P]>
  }




  export type ExceptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionWhereInput
    orderBy?: ExceptionOrderByWithAggregationInput | ExceptionOrderByWithAggregationInput[]
    by: ExceptionScalarFieldEnum[] | ExceptionScalarFieldEnum
    having?: ExceptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExceptionCountAggregateInputType | true
    _avg?: ExceptionAvgAggregateInputType
    _sum?: ExceptionSumAggregateInputType
    _min?: ExceptionMinAggregateInputType
    _max?: ExceptionMaxAggregateInputType
  }

  export type ExceptionGroupByOutputType = {
    id: number
    createdAt: Date
    startDate: Date | null
    endDate: Date | null
    studentId: number
    presence: $Enums.ExceptionPresence
    end: number | null
    notes: string | null
    _count: ExceptionCountAggregateOutputType | null
    _avg: ExceptionAvgAggregateOutputType | null
    _sum: ExceptionSumAggregateOutputType | null
    _min: ExceptionMinAggregateOutputType | null
    _max: ExceptionMaxAggregateOutputType | null
  }

  type GetExceptionGroupByPayload<T extends ExceptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExceptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExceptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExceptionGroupByOutputType[P]>
            : GetScalarType<T[P], ExceptionGroupByOutputType[P]>
        }
      >
    >


  export type ExceptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    startDate?: boolean
    endDate?: boolean
    studentId?: boolean
    presence?: boolean
    end?: boolean
    notes?: boolean
    SpecificDates?: boolean | Exception$SpecificDatesArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    ExceptionsOnLists?: boolean | Exception$ExceptionsOnListsArgs<ExtArgs>
    _count?: boolean | ExceptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exception"]>

  export type ExceptionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    startDate?: boolean
    endDate?: boolean
    studentId?: boolean
    presence?: boolean
    end?: boolean
    notes?: boolean
  }

  export type ExceptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SpecificDates?: boolean | Exception$SpecificDatesArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    ExceptionsOnLists?: boolean | Exception$ExceptionsOnListsArgs<ExtArgs>
    _count?: boolean | ExceptionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ExceptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exception"
    objects: {
      SpecificDates: Prisma.$SpecificDatePayload<ExtArgs>[]
      Student: Prisma.$StudentPayload<ExtArgs>
      ExceptionsOnLists: Prisma.$ExceptionsOnListsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      startDate: Date | null
      endDate: Date | null
      studentId: number
      presence: $Enums.ExceptionPresence
      end: number | null
      notes: string | null
    }, ExtArgs["result"]["exception"]>
    composites: {}
  }


  type ExceptionGetPayload<S extends boolean | null | undefined | ExceptionDefaultArgs> = $Result.GetResult<Prisma.$ExceptionPayload, S>

  type ExceptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExceptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExceptionCountAggregateInputType | true
    }

  export interface ExceptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exception'], meta: { name: 'Exception' } }
    /**
     * Find zero or one Exception that matches the filter.
     * @param {ExceptionFindUniqueArgs} args - Arguments to find a Exception
     * @example
     * // Get one Exception
     * const exception = await prisma.exception.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExceptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionFindUniqueArgs<ExtArgs>>
    ): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Exception that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExceptionFindUniqueOrThrowArgs} args - Arguments to find a Exception
     * @example
     * // Get one Exception
     * const exception = await prisma.exception.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExceptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Exception that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionFindFirstArgs} args - Arguments to find a Exception
     * @example
     * // Get one Exception
     * const exception = await prisma.exception.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExceptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionFindFirstArgs<ExtArgs>>
    ): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Exception that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionFindFirstOrThrowArgs} args - Arguments to find a Exception
     * @example
     * // Get one Exception
     * const exception = await prisma.exception.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExceptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Exceptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exceptions
     * const exceptions = await prisma.exception.findMany()
     * 
     * // Get first 10 Exceptions
     * const exceptions = await prisma.exception.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exceptionWithIdOnly = await prisma.exception.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExceptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Exception.
     * @param {ExceptionCreateArgs} args - Arguments to create a Exception.
     * @example
     * // Create one Exception
     * const Exception = await prisma.exception.create({
     *   data: {
     *     // ... data to create a Exception
     *   }
     * })
     * 
    **/
    create<T extends ExceptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionCreateArgs<ExtArgs>>
    ): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Exceptions.
     *     @param {ExceptionCreateManyArgs} args - Arguments to create many Exceptions.
     *     @example
     *     // Create many Exceptions
     *     const exception = await prisma.exception.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExceptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exception.
     * @param {ExceptionDeleteArgs} args - Arguments to delete one Exception.
     * @example
     * // Delete one Exception
     * const Exception = await prisma.exception.delete({
     *   where: {
     *     // ... filter to delete one Exception
     *   }
     * })
     * 
    **/
    delete<T extends ExceptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionDeleteArgs<ExtArgs>>
    ): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Exception.
     * @param {ExceptionUpdateArgs} args - Arguments to update one Exception.
     * @example
     * // Update one Exception
     * const exception = await prisma.exception.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExceptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionUpdateArgs<ExtArgs>>
    ): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Exceptions.
     * @param {ExceptionDeleteManyArgs} args - Arguments to filter Exceptions to delete.
     * @example
     * // Delete a few Exceptions
     * const { count } = await prisma.exception.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExceptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExceptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exceptions
     * const exception = await prisma.exception.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExceptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exception.
     * @param {ExceptionUpsertArgs} args - Arguments to update or create a Exception.
     * @example
     * // Update or create a Exception
     * const exception = await prisma.exception.upsert({
     *   create: {
     *     // ... data to create a Exception
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exception we want to update
     *   }
     * })
    **/
    upsert<T extends ExceptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExceptionUpsertArgs<ExtArgs>>
    ): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Exceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionCountArgs} args - Arguments to filter Exceptions to count.
     * @example
     * // Count the number of Exceptions
     * const count = await prisma.exception.count({
     *   where: {
     *     // ... the filter for the Exceptions we want to count
     *   }
     * })
    **/
    count<T extends ExceptionCountArgs>(
      args?: Subset<T, ExceptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExceptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exception.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExceptionAggregateArgs>(args: Subset<T, ExceptionAggregateArgs>): Prisma.PrismaPromise<GetExceptionAggregateType<T>>

    /**
     * Group by Exception.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionGroupByArgs} args - Group by arguments.
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
      T extends ExceptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExceptionGroupByArgs['orderBy'] }
        : { orderBy?: ExceptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExceptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExceptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exception model
   */
  readonly fields: ExceptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exception.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExceptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    SpecificDates<T extends Exception$SpecificDatesArgs<ExtArgs> = {}>(args?: Subset<T, Exception$SpecificDatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'findMany'> | Null>;

    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ExceptionsOnLists<T extends Exception$ExceptionsOnListsArgs<ExtArgs> = {}>(args?: Subset<T, Exception$ExceptionsOnListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionsOnListsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Exception model
   */ 
  interface ExceptionFieldRefs {
    readonly id: FieldRef<"Exception", 'Int'>
    readonly createdAt: FieldRef<"Exception", 'DateTime'>
    readonly startDate: FieldRef<"Exception", 'DateTime'>
    readonly endDate: FieldRef<"Exception", 'DateTime'>
    readonly studentId: FieldRef<"Exception", 'Int'>
    readonly presence: FieldRef<"Exception", 'ExceptionPresence'>
    readonly end: FieldRef<"Exception", 'Int'>
    readonly notes: FieldRef<"Exception", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Exception findUnique
   */
  export type ExceptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exception to fetch.
     */
    where: ExceptionWhereUniqueInput
  }


  /**
   * Exception findUniqueOrThrow
   */
  export type ExceptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exception to fetch.
     */
    where: ExceptionWhereUniqueInput
  }


  /**
   * Exception findFirst
   */
  export type ExceptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exception to fetch.
     */
    where?: ExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exceptions to fetch.
     */
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exceptions.
     */
    cursor?: ExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exceptions.
     */
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }


  /**
   * Exception findFirstOrThrow
   */
  export type ExceptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exception to fetch.
     */
    where?: ExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exceptions to fetch.
     */
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exceptions.
     */
    cursor?: ExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exceptions.
     */
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }


  /**
   * Exception findMany
   */
  export type ExceptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter, which Exceptions to fetch.
     */
    where?: ExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exceptions to fetch.
     */
    orderBy?: ExceptionOrderByWithRelationInput | ExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exceptions.
     */
    cursor?: ExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exceptions.
     */
    skip?: number
    distinct?: ExceptionScalarFieldEnum | ExceptionScalarFieldEnum[]
  }


  /**
   * Exception create
   */
  export type ExceptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Exception.
     */
    data: XOR<ExceptionCreateInput, ExceptionUncheckedCreateInput>
  }


  /**
   * Exception createMany
   */
  export type ExceptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exceptions.
     */
    data: ExceptionCreateManyInput | ExceptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Exception update
   */
  export type ExceptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Exception.
     */
    data: XOR<ExceptionUpdateInput, ExceptionUncheckedUpdateInput>
    /**
     * Choose, which Exception to update.
     */
    where: ExceptionWhereUniqueInput
  }


  /**
   * Exception updateMany
   */
  export type ExceptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exceptions.
     */
    data: XOR<ExceptionUpdateManyMutationInput, ExceptionUncheckedUpdateManyInput>
    /**
     * Filter which Exceptions to update
     */
    where?: ExceptionWhereInput
  }


  /**
   * Exception upsert
   */
  export type ExceptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Exception to update in case it exists.
     */
    where: ExceptionWhereUniqueInput
    /**
     * In case the Exception found by the `where` argument doesn't exist, create a new Exception with this data.
     */
    create: XOR<ExceptionCreateInput, ExceptionUncheckedCreateInput>
    /**
     * In case the Exception was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExceptionUpdateInput, ExceptionUncheckedUpdateInput>
  }


  /**
   * Exception delete
   */
  export type ExceptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
    /**
     * Filter which Exception to delete.
     */
    where: ExceptionWhereUniqueInput
  }


  /**
   * Exception deleteMany
   */
  export type ExceptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exceptions to delete
     */
    where?: ExceptionWhereInput
  }


  /**
   * Exception.SpecificDates
   */
  export type Exception$SpecificDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    where?: SpecificDateWhereInput
    orderBy?: SpecificDateOrderByWithRelationInput | SpecificDateOrderByWithRelationInput[]
    cursor?: SpecificDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecificDateScalarFieldEnum | SpecificDateScalarFieldEnum[]
  }


  /**
   * Exception.ExceptionsOnLists
   */
  export type Exception$ExceptionsOnListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionsOnLists
     */
    select?: ExceptionsOnListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionsOnListsInclude<ExtArgs> | null
    where?: ExceptionsOnListsWhereInput
    orderBy?: ExceptionsOnListsOrderByWithRelationInput | ExceptionsOnListsOrderByWithRelationInput[]
    cursor?: ExceptionsOnListsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExceptionsOnListsScalarFieldEnum | ExceptionsOnListsScalarFieldEnum[]
  }


  /**
   * Exception without action
   */
  export type ExceptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exception
     */
    select?: ExceptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExceptionInclude<ExtArgs> | null
  }



  /**
   * Model SpecificDate
   */

  export type AggregateSpecificDate = {
    _count: SpecificDateCountAggregateOutputType | null
    _avg: SpecificDateAvgAggregateOutputType | null
    _sum: SpecificDateSumAggregateOutputType | null
    _min: SpecificDateMinAggregateOutputType | null
    _max: SpecificDateMaxAggregateOutputType | null
  }

  export type SpecificDateAvgAggregateOutputType = {
    id: number | null
    exceptionId: number | null
  }

  export type SpecificDateSumAggregateOutputType = {
    id: number | null
    exceptionId: number | null
  }

  export type SpecificDateMinAggregateOutputType = {
    id: number | null
    exceptionId: number | null
    date: Date | null
  }

  export type SpecificDateMaxAggregateOutputType = {
    id: number | null
    exceptionId: number | null
    date: Date | null
  }

  export type SpecificDateCountAggregateOutputType = {
    id: number
    exceptionId: number
    date: number
    _all: number
  }


  export type SpecificDateAvgAggregateInputType = {
    id?: true
    exceptionId?: true
  }

  export type SpecificDateSumAggregateInputType = {
    id?: true
    exceptionId?: true
  }

  export type SpecificDateMinAggregateInputType = {
    id?: true
    exceptionId?: true
    date?: true
  }

  export type SpecificDateMaxAggregateInputType = {
    id?: true
    exceptionId?: true
    date?: true
  }

  export type SpecificDateCountAggregateInputType = {
    id?: true
    exceptionId?: true
    date?: true
    _all?: true
  }

  export type SpecificDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecificDate to aggregate.
     */
    where?: SpecificDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecificDates to fetch.
     */
    orderBy?: SpecificDateOrderByWithRelationInput | SpecificDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecificDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecificDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecificDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecificDates
    **/
    _count?: true | SpecificDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecificDateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecificDateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecificDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecificDateMaxAggregateInputType
  }

  export type GetSpecificDateAggregateType<T extends SpecificDateAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecificDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecificDate[P]>
      : GetScalarType<T[P], AggregateSpecificDate[P]>
  }




  export type SpecificDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecificDateWhereInput
    orderBy?: SpecificDateOrderByWithAggregationInput | SpecificDateOrderByWithAggregationInput[]
    by: SpecificDateScalarFieldEnum[] | SpecificDateScalarFieldEnum
    having?: SpecificDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecificDateCountAggregateInputType | true
    _avg?: SpecificDateAvgAggregateInputType
    _sum?: SpecificDateSumAggregateInputType
    _min?: SpecificDateMinAggregateInputType
    _max?: SpecificDateMaxAggregateInputType
  }

  export type SpecificDateGroupByOutputType = {
    id: number
    exceptionId: number
    date: Date
    _count: SpecificDateCountAggregateOutputType | null
    _avg: SpecificDateAvgAggregateOutputType | null
    _sum: SpecificDateSumAggregateOutputType | null
    _min: SpecificDateMinAggregateOutputType | null
    _max: SpecificDateMaxAggregateOutputType | null
  }

  type GetSpecificDateGroupByPayload<T extends SpecificDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecificDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecificDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecificDateGroupByOutputType[P]>
            : GetScalarType<T[P], SpecificDateGroupByOutputType[P]>
        }
      >
    >


  export type SpecificDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exceptionId?: boolean
    date?: boolean
    exception?: boolean | ExceptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specificDate"]>

  export type SpecificDateSelectScalar = {
    id?: boolean
    exceptionId?: boolean
    date?: boolean
  }

  export type SpecificDateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exception?: boolean | ExceptionDefaultArgs<ExtArgs>
  }


  export type $SpecificDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecificDate"
    objects: {
      exception: Prisma.$ExceptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      exceptionId: number
      date: Date
    }, ExtArgs["result"]["specificDate"]>
    composites: {}
  }


  type SpecificDateGetPayload<S extends boolean | null | undefined | SpecificDateDefaultArgs> = $Result.GetResult<Prisma.$SpecificDatePayload, S>

  type SpecificDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpecificDateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpecificDateCountAggregateInputType | true
    }

  export interface SpecificDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecificDate'], meta: { name: 'SpecificDate' } }
    /**
     * Find zero or one SpecificDate that matches the filter.
     * @param {SpecificDateFindUniqueArgs} args - Arguments to find a SpecificDate
     * @example
     * // Get one SpecificDate
     * const specificDate = await prisma.specificDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpecificDateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SpecificDateFindUniqueArgs<ExtArgs>>
    ): Prisma__SpecificDateClient<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SpecificDate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SpecificDateFindUniqueOrThrowArgs} args - Arguments to find a SpecificDate
     * @example
     * // Get one SpecificDate
     * const specificDate = await prisma.specificDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpecificDateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecificDateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SpecificDateClient<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SpecificDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificDateFindFirstArgs} args - Arguments to find a SpecificDate
     * @example
     * // Get one SpecificDate
     * const specificDate = await prisma.specificDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpecificDateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecificDateFindFirstArgs<ExtArgs>>
    ): Prisma__SpecificDateClient<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SpecificDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificDateFindFirstOrThrowArgs} args - Arguments to find a SpecificDate
     * @example
     * // Get one SpecificDate
     * const specificDate = await prisma.specificDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpecificDateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecificDateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SpecificDateClient<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SpecificDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificDateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecificDates
     * const specificDates = await prisma.specificDate.findMany()
     * 
     * // Get first 10 SpecificDates
     * const specificDates = await prisma.specificDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specificDateWithIdOnly = await prisma.specificDate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpecificDateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecificDateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SpecificDate.
     * @param {SpecificDateCreateArgs} args - Arguments to create a SpecificDate.
     * @example
     * // Create one SpecificDate
     * const SpecificDate = await prisma.specificDate.create({
     *   data: {
     *     // ... data to create a SpecificDate
     *   }
     * })
     * 
    **/
    create<T extends SpecificDateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SpecificDateCreateArgs<ExtArgs>>
    ): Prisma__SpecificDateClient<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SpecificDates.
     *     @param {SpecificDateCreateManyArgs} args - Arguments to create many SpecificDates.
     *     @example
     *     // Create many SpecificDates
     *     const specificDate = await prisma.specificDate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpecificDateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecificDateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpecificDate.
     * @param {SpecificDateDeleteArgs} args - Arguments to delete one SpecificDate.
     * @example
     * // Delete one SpecificDate
     * const SpecificDate = await prisma.specificDate.delete({
     *   where: {
     *     // ... filter to delete one SpecificDate
     *   }
     * })
     * 
    **/
    delete<T extends SpecificDateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SpecificDateDeleteArgs<ExtArgs>>
    ): Prisma__SpecificDateClient<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SpecificDate.
     * @param {SpecificDateUpdateArgs} args - Arguments to update one SpecificDate.
     * @example
     * // Update one SpecificDate
     * const specificDate = await prisma.specificDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpecificDateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SpecificDateUpdateArgs<ExtArgs>>
    ): Prisma__SpecificDateClient<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SpecificDates.
     * @param {SpecificDateDeleteManyArgs} args - Arguments to filter SpecificDates to delete.
     * @example
     * // Delete a few SpecificDates
     * const { count } = await prisma.specificDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpecificDateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpecificDateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecificDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecificDates
     * const specificDate = await prisma.specificDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpecificDateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SpecificDateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpecificDate.
     * @param {SpecificDateUpsertArgs} args - Arguments to update or create a SpecificDate.
     * @example
     * // Update or create a SpecificDate
     * const specificDate = await prisma.specificDate.upsert({
     *   create: {
     *     // ... data to create a SpecificDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecificDate we want to update
     *   }
     * })
    **/
    upsert<T extends SpecificDateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SpecificDateUpsertArgs<ExtArgs>>
    ): Prisma__SpecificDateClient<$Result.GetResult<Prisma.$SpecificDatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SpecificDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificDateCountArgs} args - Arguments to filter SpecificDates to count.
     * @example
     * // Count the number of SpecificDates
     * const count = await prisma.specificDate.count({
     *   where: {
     *     // ... the filter for the SpecificDates we want to count
     *   }
     * })
    **/
    count<T extends SpecificDateCountArgs>(
      args?: Subset<T, SpecificDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecificDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecificDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecificDateAggregateArgs>(args: Subset<T, SpecificDateAggregateArgs>): Prisma.PrismaPromise<GetSpecificDateAggregateType<T>>

    /**
     * Group by SpecificDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecificDateGroupByArgs} args - Group by arguments.
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
      T extends SpecificDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecificDateGroupByArgs['orderBy'] }
        : { orderBy?: SpecificDateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecificDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecificDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecificDate model
   */
  readonly fields: SpecificDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecificDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecificDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    exception<T extends ExceptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExceptionDefaultArgs<ExtArgs>>): Prisma__ExceptionClient<$Result.GetResult<Prisma.$ExceptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SpecificDate model
   */ 
  interface SpecificDateFieldRefs {
    readonly id: FieldRef<"SpecificDate", 'Int'>
    readonly exceptionId: FieldRef<"SpecificDate", 'Int'>
    readonly date: FieldRef<"SpecificDate", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SpecificDate findUnique
   */
  export type SpecificDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecificDate to fetch.
     */
    where: SpecificDateWhereUniqueInput
  }


  /**
   * SpecificDate findUniqueOrThrow
   */
  export type SpecificDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecificDate to fetch.
     */
    where: SpecificDateWhereUniqueInput
  }


  /**
   * SpecificDate findFirst
   */
  export type SpecificDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecificDate to fetch.
     */
    where?: SpecificDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecificDates to fetch.
     */
    orderBy?: SpecificDateOrderByWithRelationInput | SpecificDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecificDates.
     */
    cursor?: SpecificDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecificDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecificDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecificDates.
     */
    distinct?: SpecificDateScalarFieldEnum | SpecificDateScalarFieldEnum[]
  }


  /**
   * SpecificDate findFirstOrThrow
   */
  export type SpecificDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecificDate to fetch.
     */
    where?: SpecificDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecificDates to fetch.
     */
    orderBy?: SpecificDateOrderByWithRelationInput | SpecificDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecificDates.
     */
    cursor?: SpecificDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecificDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecificDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecificDates.
     */
    distinct?: SpecificDateScalarFieldEnum | SpecificDateScalarFieldEnum[]
  }


  /**
   * SpecificDate findMany
   */
  export type SpecificDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecificDates to fetch.
     */
    where?: SpecificDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecificDates to fetch.
     */
    orderBy?: SpecificDateOrderByWithRelationInput | SpecificDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecificDates.
     */
    cursor?: SpecificDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecificDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecificDates.
     */
    skip?: number
    distinct?: SpecificDateScalarFieldEnum | SpecificDateScalarFieldEnum[]
  }


  /**
   * SpecificDate create
   */
  export type SpecificDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecificDate.
     */
    data: XOR<SpecificDateCreateInput, SpecificDateUncheckedCreateInput>
  }


  /**
   * SpecificDate createMany
   */
  export type SpecificDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecificDates.
     */
    data: SpecificDateCreateManyInput | SpecificDateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SpecificDate update
   */
  export type SpecificDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecificDate.
     */
    data: XOR<SpecificDateUpdateInput, SpecificDateUncheckedUpdateInput>
    /**
     * Choose, which SpecificDate to update.
     */
    where: SpecificDateWhereUniqueInput
  }


  /**
   * SpecificDate updateMany
   */
  export type SpecificDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecificDates.
     */
    data: XOR<SpecificDateUpdateManyMutationInput, SpecificDateUncheckedUpdateManyInput>
    /**
     * Filter which SpecificDates to update
     */
    where?: SpecificDateWhereInput
  }


  /**
   * SpecificDate upsert
   */
  export type SpecificDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecificDate to update in case it exists.
     */
    where: SpecificDateWhereUniqueInput
    /**
     * In case the SpecificDate found by the `where` argument doesn't exist, create a new SpecificDate with this data.
     */
    create: XOR<SpecificDateCreateInput, SpecificDateUncheckedCreateInput>
    /**
     * In case the SpecificDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecificDateUpdateInput, SpecificDateUncheckedUpdateInput>
  }


  /**
   * SpecificDate delete
   */
  export type SpecificDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
    /**
     * Filter which SpecificDate to delete.
     */
    where: SpecificDateWhereUniqueInput
  }


  /**
   * SpecificDate deleteMany
   */
  export type SpecificDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecificDates to delete
     */
    where?: SpecificDateWhereInput
  }


  /**
   * SpecificDate without action
   */
  export type SpecificDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecificDate
     */
    select?: SpecificDateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpecificDateInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    lastName: 'lastName',
    notes: 'notes',
    grade: 'grade',
    className: 'className'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    day: 'day',
    end: 'end',
    status: 'status',
    studentId: 'studentId',
    listId: 'listId'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const VisitationScalarFieldEnum: {
    id: 'id',
    date: 'date',
    start: 'start',
    end: 'end',
    studentId: 'studentId',
    listId: 'listId',
    startNotes: 'startNotes',
    endNotes: 'endNotes',
    hasHomework: 'hasHomework'
  };

  export type VisitationScalarFieldEnum = (typeof VisitationScalarFieldEnum)[keyof typeof VisitationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    listId: 'listId',
    isMainGroup: 'isMainGroup'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupsOnStudentsScalarFieldEnum: {
    studentId: 'studentId',
    groupId: 'groupId'
  };

  export type GroupsOnStudentsScalarFieldEnum = (typeof GroupsOnStudentsScalarFieldEnum)[keyof typeof GroupsOnStudentsScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isMainList: 'isMainList',
    recordTime: 'recordTime',
    manageTime: 'manageTime',
    studentName: 'studentName',
    className: 'className',
    time: 'time',
    notes: 'notes',
    groupColor: 'groupColor'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const DayNotesScalarFieldEnum: {
    id: 'id',
    date: 'date',
    listId: 'listId',
    notes: 'notes'
  };

  export type DayNotesScalarFieldEnum = (typeof DayNotesScalarFieldEnum)[keyof typeof DayNotesScalarFieldEnum]


  export const ListActivationScalarFieldEnum: {
    id: 'id',
    day: 'day',
    startTime: 'startTime',
    startBuffer: 'startBuffer',
    endTime: 'endTime',
    endBuffer: 'endBuffer',
    listId: 'listId'
  };

  export type ListActivationScalarFieldEnum = (typeof ListActivationScalarFieldEnum)[keyof typeof ListActivationScalarFieldEnum]


  export const ExceptionsOnListsScalarFieldEnum: {
    exceptionId: 'exceptionId',
    listId: 'listId'
  };

  export type ExceptionsOnListsScalarFieldEnum = (typeof ExceptionsOnListsScalarFieldEnum)[keyof typeof ExceptionsOnListsScalarFieldEnum]


  export const ExceptionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    startDate: 'startDate',
    endDate: 'endDate',
    studentId: 'studentId',
    presence: 'presence',
    end: 'end',
    notes: 'notes'
  };

  export type ExceptionScalarFieldEnum = (typeof ExceptionScalarFieldEnum)[keyof typeof ExceptionScalarFieldEnum]


  export const SpecificDateScalarFieldEnum: {
    id: 'id',
    exceptionId: 'exceptionId',
    date: 'date'
  };

  export type SpecificDateScalarFieldEnum = (typeof SpecificDateScalarFieldEnum)[keyof typeof SpecificDateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'RecordTime'
   */
  export type EnumRecordTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordTime'>
    


  /**
   * Reference to a field of type 'TimeManagement'
   */
  export type EnumTimeManagementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeManagement'>
    


  /**
   * Reference to a field of type 'ListStudentNotes'
   */
  export type EnumListStudentNotesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListStudentNotes'>
    


  /**
   * Reference to a field of type 'ExceptionPresence'
   */
  export type EnumExceptionPresenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExceptionPresence'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    notes?: StringNullableFilter<"Student"> | string | null
    grade?: IntFilter<"Student"> | number
    className?: StringFilter<"Student"> | string
    attendances?: AttendanceListRelationFilter
    visitations?: VisitationListRelationFilter
    GroupsOnStudents?: GroupsOnStudentsListRelationFilter
    Exception?: ExceptionListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrderInput | SortOrder
    grade?: SortOrder
    className?: SortOrder
    attendances?: AttendanceOrderByRelationAggregateInput
    visitations?: VisitationOrderByRelationAggregateInput
    GroupsOnStudents?: GroupsOnStudentsOrderByRelationAggregateInput
    Exception?: ExceptionOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    notes?: StringNullableFilter<"Student"> | string | null
    grade?: IntFilter<"Student"> | number
    className?: StringFilter<"Student"> | string
    attendances?: AttendanceListRelationFilter
    visitations?: VisitationListRelationFilter
    GroupsOnStudents?: GroupsOnStudentsListRelationFilter
    Exception?: ExceptionListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrderInput | SortOrder
    grade?: SortOrder
    className?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    firstName?: StringWithAggregatesFilter<"Student"> | string
    lastName?: StringWithAggregatesFilter<"Student"> | string
    notes?: StringNullableWithAggregatesFilter<"Student"> | string | null
    grade?: IntWithAggregatesFilter<"Student"> | number
    className?: StringWithAggregatesFilter<"Student"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    day?: IntFilter<"Attendance"> | number
    end?: IntFilter<"Attendance"> | number
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    studentId?: IntFilter<"Attendance"> | number
    listId?: IntFilter<"Attendance"> | number
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    List?: XOR<ListRelationFilter, ListWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    day?: SortOrder
    end?: SortOrder
    status?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
    Student?: StudentOrderByWithRelationInput
    List?: ListOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    day?: IntFilter<"Attendance"> | number
    end?: IntFilter<"Attendance"> | number
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    studentId?: IntFilter<"Attendance"> | number
    listId?: IntFilter<"Attendance"> | number
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    List?: XOR<ListRelationFilter, ListWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    day?: SortOrder
    end?: SortOrder
    status?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    day?: IntWithAggregatesFilter<"Attendance"> | number
    end?: IntWithAggregatesFilter<"Attendance"> | number
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    studentId?: IntWithAggregatesFilter<"Attendance"> | number
    listId?: IntWithAggregatesFilter<"Attendance"> | number
  }

  export type VisitationWhereInput = {
    AND?: VisitationWhereInput | VisitationWhereInput[]
    OR?: VisitationWhereInput[]
    NOT?: VisitationWhereInput | VisitationWhereInput[]
    id?: IntFilter<"Visitation"> | number
    date?: DateTimeFilter<"Visitation"> | Date | string
    start?: IntFilter<"Visitation"> | number
    end?: IntNullableFilter<"Visitation"> | number | null
    studentId?: IntFilter<"Visitation"> | number
    listId?: IntFilter<"Visitation"> | number
    startNotes?: StringNullableFilter<"Visitation"> | string | null
    endNotes?: StringNullableFilter<"Visitation"> | string | null
    hasHomework?: BoolNullableFilter<"Visitation"> | boolean | null
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    List?: XOR<ListRelationFilter, ListWhereInput>
  }

  export type VisitationOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    studentId?: SortOrder
    listId?: SortOrder
    startNotes?: SortOrderInput | SortOrder
    endNotes?: SortOrderInput | SortOrder
    hasHomework?: SortOrderInput | SortOrder
    Student?: StudentOrderByWithRelationInput
    List?: ListOrderByWithRelationInput
  }

  export type VisitationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date_studentId_listId?: VisitationDateStudentIdListIdCompoundUniqueInput
    AND?: VisitationWhereInput | VisitationWhereInput[]
    OR?: VisitationWhereInput[]
    NOT?: VisitationWhereInput | VisitationWhereInput[]
    date?: DateTimeFilter<"Visitation"> | Date | string
    start?: IntFilter<"Visitation"> | number
    end?: IntNullableFilter<"Visitation"> | number | null
    studentId?: IntFilter<"Visitation"> | number
    listId?: IntFilter<"Visitation"> | number
    startNotes?: StringNullableFilter<"Visitation"> | string | null
    endNotes?: StringNullableFilter<"Visitation"> | string | null
    hasHomework?: BoolNullableFilter<"Visitation"> | boolean | null
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    List?: XOR<ListRelationFilter, ListWhereInput>
  }, "id" | "date_studentId_listId">

  export type VisitationOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    studentId?: SortOrder
    listId?: SortOrder
    startNotes?: SortOrderInput | SortOrder
    endNotes?: SortOrderInput | SortOrder
    hasHomework?: SortOrderInput | SortOrder
    _count?: VisitationCountOrderByAggregateInput
    _avg?: VisitationAvgOrderByAggregateInput
    _max?: VisitationMaxOrderByAggregateInput
    _min?: VisitationMinOrderByAggregateInput
    _sum?: VisitationSumOrderByAggregateInput
  }

  export type VisitationScalarWhereWithAggregatesInput = {
    AND?: VisitationScalarWhereWithAggregatesInput | VisitationScalarWhereWithAggregatesInput[]
    OR?: VisitationScalarWhereWithAggregatesInput[]
    NOT?: VisitationScalarWhereWithAggregatesInput | VisitationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visitation"> | number
    date?: DateTimeWithAggregatesFilter<"Visitation"> | Date | string
    start?: IntWithAggregatesFilter<"Visitation"> | number
    end?: IntNullableWithAggregatesFilter<"Visitation"> | number | null
    studentId?: IntWithAggregatesFilter<"Visitation"> | number
    listId?: IntWithAggregatesFilter<"Visitation"> | number
    startNotes?: StringNullableWithAggregatesFilter<"Visitation"> | string | null
    endNotes?: StringNullableWithAggregatesFilter<"Visitation"> | string | null
    hasHomework?: BoolNullableWithAggregatesFilter<"Visitation"> | boolean | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
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
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    color?: StringNullableFilter<"Group"> | string | null
    listId?: IntNullableFilter<"Group"> | number | null
    isMainGroup?: BoolFilter<"Group"> | boolean
    GroupsOnStudents?: GroupsOnStudentsListRelationFilter
    list?: XOR<ListNullableRelationFilter, ListWhereInput> | null
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    listId?: SortOrderInput | SortOrder
    isMainGroup?: SortOrder
    GroupsOnStudents?: GroupsOnStudentsOrderByRelationAggregateInput
    list?: ListOrderByWithRelationInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    color?: StringNullableFilter<"Group"> | string | null
    listId?: IntNullableFilter<"Group"> | number | null
    isMainGroup?: BoolFilter<"Group"> | boolean
    GroupsOnStudents?: GroupsOnStudentsListRelationFilter
    list?: XOR<ListNullableRelationFilter, ListWhereInput> | null
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    listId?: SortOrderInput | SortOrder
    isMainGroup?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    color?: StringNullableWithAggregatesFilter<"Group"> | string | null
    listId?: IntNullableWithAggregatesFilter<"Group"> | number | null
    isMainGroup?: BoolWithAggregatesFilter<"Group"> | boolean
  }

  export type GroupsOnStudentsWhereInput = {
    AND?: GroupsOnStudentsWhereInput | GroupsOnStudentsWhereInput[]
    OR?: GroupsOnStudentsWhereInput[]
    NOT?: GroupsOnStudentsWhereInput | GroupsOnStudentsWhereInput[]
    studentId?: IntFilter<"GroupsOnStudents"> | number
    groupId?: IntFilter<"GroupsOnStudents"> | number
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }

  export type GroupsOnStudentsOrderByWithRelationInput = {
    studentId?: SortOrder
    groupId?: SortOrder
    student?: StudentOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GroupsOnStudentsWhereUniqueInput = Prisma.AtLeast<{
    studentId_groupId?: GroupsOnStudentsStudentIdGroupIdCompoundUniqueInput
    AND?: GroupsOnStudentsWhereInput | GroupsOnStudentsWhereInput[]
    OR?: GroupsOnStudentsWhereInput[]
    NOT?: GroupsOnStudentsWhereInput | GroupsOnStudentsWhereInput[]
    studentId?: IntFilter<"GroupsOnStudents"> | number
    groupId?: IntFilter<"GroupsOnStudents"> | number
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }, "studentId_groupId">

  export type GroupsOnStudentsOrderByWithAggregationInput = {
    studentId?: SortOrder
    groupId?: SortOrder
    _count?: GroupsOnStudentsCountOrderByAggregateInput
    _avg?: GroupsOnStudentsAvgOrderByAggregateInput
    _max?: GroupsOnStudentsMaxOrderByAggregateInput
    _min?: GroupsOnStudentsMinOrderByAggregateInput
    _sum?: GroupsOnStudentsSumOrderByAggregateInput
  }

  export type GroupsOnStudentsScalarWhereWithAggregatesInput = {
    AND?: GroupsOnStudentsScalarWhereWithAggregatesInput | GroupsOnStudentsScalarWhereWithAggregatesInput[]
    OR?: GroupsOnStudentsScalarWhereWithAggregatesInput[]
    NOT?: GroupsOnStudentsScalarWhereWithAggregatesInput | GroupsOnStudentsScalarWhereWithAggregatesInput[]
    studentId?: IntWithAggregatesFilter<"GroupsOnStudents"> | number
    groupId?: IntWithAggregatesFilter<"GroupsOnStudents"> | number
  }

  export type ListWhereInput = {
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    id?: IntFilter<"List"> | number
    name?: StringFilter<"List"> | string
    isMainList?: BoolFilter<"List"> | boolean
    recordTime?: EnumRecordTimeFilter<"List"> | $Enums.RecordTime
    manageTime?: EnumTimeManagementFilter<"List"> | $Enums.TimeManagement
    studentName?: BoolFilter<"List"> | boolean
    className?: BoolFilter<"List"> | boolean
    time?: BoolFilter<"List"> | boolean
    notes?: EnumListStudentNotesFilter<"List"> | $Enums.ListStudentNotes
    groupColor?: BoolFilter<"List"> | boolean
    Group?: GroupListRelationFilter
    activations?: ListActivationListRelationFilter
    Visitation?: VisitationListRelationFilter
    Attendance?: AttendanceListRelationFilter
    ExceptionsOnLists?: ExceptionsOnListsListRelationFilter
    DayNotes?: DayNotesListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isMainList?: SortOrder
    recordTime?: SortOrder
    manageTime?: SortOrder
    studentName?: SortOrder
    className?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    groupColor?: SortOrder
    Group?: GroupOrderByRelationAggregateInput
    activations?: ListActivationOrderByRelationAggregateInput
    Visitation?: VisitationOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
    ExceptionsOnLists?: ExceptionsOnListsOrderByRelationAggregateInput
    DayNotes?: DayNotesOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    name?: StringFilter<"List"> | string
    isMainList?: BoolFilter<"List"> | boolean
    recordTime?: EnumRecordTimeFilter<"List"> | $Enums.RecordTime
    manageTime?: EnumTimeManagementFilter<"List"> | $Enums.TimeManagement
    studentName?: BoolFilter<"List"> | boolean
    className?: BoolFilter<"List"> | boolean
    time?: BoolFilter<"List"> | boolean
    notes?: EnumListStudentNotesFilter<"List"> | $Enums.ListStudentNotes
    groupColor?: BoolFilter<"List"> | boolean
    Group?: GroupListRelationFilter
    activations?: ListActivationListRelationFilter
    Visitation?: VisitationListRelationFilter
    Attendance?: AttendanceListRelationFilter
    ExceptionsOnLists?: ExceptionsOnListsListRelationFilter
    DayNotes?: DayNotesListRelationFilter
  }, "id">

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isMainList?: SortOrder
    recordTime?: SortOrder
    manageTime?: SortOrder
    studentName?: SortOrder
    className?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    groupColor?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _avg?: ListAvgOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
    _sum?: ListSumOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    OR?: ListScalarWhereWithAggregatesInput[]
    NOT?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"List"> | number
    name?: StringWithAggregatesFilter<"List"> | string
    isMainList?: BoolWithAggregatesFilter<"List"> | boolean
    recordTime?: EnumRecordTimeWithAggregatesFilter<"List"> | $Enums.RecordTime
    manageTime?: EnumTimeManagementWithAggregatesFilter<"List"> | $Enums.TimeManagement
    studentName?: BoolWithAggregatesFilter<"List"> | boolean
    className?: BoolWithAggregatesFilter<"List"> | boolean
    time?: BoolWithAggregatesFilter<"List"> | boolean
    notes?: EnumListStudentNotesWithAggregatesFilter<"List"> | $Enums.ListStudentNotes
    groupColor?: BoolWithAggregatesFilter<"List"> | boolean
  }

  export type DayNotesWhereInput = {
    AND?: DayNotesWhereInput | DayNotesWhereInput[]
    OR?: DayNotesWhereInput[]
    NOT?: DayNotesWhereInput | DayNotesWhereInput[]
    id?: IntFilter<"DayNotes"> | number
    date?: DateTimeFilter<"DayNotes"> | Date | string
    listId?: IntFilter<"DayNotes"> | number
    notes?: StringFilter<"DayNotes"> | string
    list?: XOR<ListRelationFilter, ListWhereInput>
  }

  export type DayNotesOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    listId?: SortOrder
    notes?: SortOrder
    list?: ListOrderByWithRelationInput
  }

  export type DayNotesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date_listId?: DayNotesDateListIdCompoundUniqueInput
    AND?: DayNotesWhereInput | DayNotesWhereInput[]
    OR?: DayNotesWhereInput[]
    NOT?: DayNotesWhereInput | DayNotesWhereInput[]
    date?: DateTimeFilter<"DayNotes"> | Date | string
    listId?: IntFilter<"DayNotes"> | number
    notes?: StringFilter<"DayNotes"> | string
    list?: XOR<ListRelationFilter, ListWhereInput>
  }, "id" | "date_listId">

  export type DayNotesOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    listId?: SortOrder
    notes?: SortOrder
    _count?: DayNotesCountOrderByAggregateInput
    _avg?: DayNotesAvgOrderByAggregateInput
    _max?: DayNotesMaxOrderByAggregateInput
    _min?: DayNotesMinOrderByAggregateInput
    _sum?: DayNotesSumOrderByAggregateInput
  }

  export type DayNotesScalarWhereWithAggregatesInput = {
    AND?: DayNotesScalarWhereWithAggregatesInput | DayNotesScalarWhereWithAggregatesInput[]
    OR?: DayNotesScalarWhereWithAggregatesInput[]
    NOT?: DayNotesScalarWhereWithAggregatesInput | DayNotesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DayNotes"> | number
    date?: DateTimeWithAggregatesFilter<"DayNotes"> | Date | string
    listId?: IntWithAggregatesFilter<"DayNotes"> | number
    notes?: StringWithAggregatesFilter<"DayNotes"> | string
  }

  export type ListActivationWhereInput = {
    AND?: ListActivationWhereInput | ListActivationWhereInput[]
    OR?: ListActivationWhereInput[]
    NOT?: ListActivationWhereInput | ListActivationWhereInput[]
    id?: IntFilter<"ListActivation"> | number
    day?: IntFilter<"ListActivation"> | number
    startTime?: IntFilter<"ListActivation"> | number
    startBuffer?: IntFilter<"ListActivation"> | number
    endTime?: IntFilter<"ListActivation"> | number
    endBuffer?: IntFilter<"ListActivation"> | number
    listId?: IntNullableFilter<"ListActivation"> | number | null
    List?: XOR<ListNullableRelationFilter, ListWhereInput> | null
  }

  export type ListActivationOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    startBuffer?: SortOrder
    endTime?: SortOrder
    endBuffer?: SortOrder
    listId?: SortOrderInput | SortOrder
    List?: ListOrderByWithRelationInput
  }

  export type ListActivationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListActivationWhereInput | ListActivationWhereInput[]
    OR?: ListActivationWhereInput[]
    NOT?: ListActivationWhereInput | ListActivationWhereInput[]
    day?: IntFilter<"ListActivation"> | number
    startTime?: IntFilter<"ListActivation"> | number
    startBuffer?: IntFilter<"ListActivation"> | number
    endTime?: IntFilter<"ListActivation"> | number
    endBuffer?: IntFilter<"ListActivation"> | number
    listId?: IntNullableFilter<"ListActivation"> | number | null
    List?: XOR<ListNullableRelationFilter, ListWhereInput> | null
  }, "id">

  export type ListActivationOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    startBuffer?: SortOrder
    endTime?: SortOrder
    endBuffer?: SortOrder
    listId?: SortOrderInput | SortOrder
    _count?: ListActivationCountOrderByAggregateInput
    _avg?: ListActivationAvgOrderByAggregateInput
    _max?: ListActivationMaxOrderByAggregateInput
    _min?: ListActivationMinOrderByAggregateInput
    _sum?: ListActivationSumOrderByAggregateInput
  }

  export type ListActivationScalarWhereWithAggregatesInput = {
    AND?: ListActivationScalarWhereWithAggregatesInput | ListActivationScalarWhereWithAggregatesInput[]
    OR?: ListActivationScalarWhereWithAggregatesInput[]
    NOT?: ListActivationScalarWhereWithAggregatesInput | ListActivationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListActivation"> | number
    day?: IntWithAggregatesFilter<"ListActivation"> | number
    startTime?: IntWithAggregatesFilter<"ListActivation"> | number
    startBuffer?: IntWithAggregatesFilter<"ListActivation"> | number
    endTime?: IntWithAggregatesFilter<"ListActivation"> | number
    endBuffer?: IntWithAggregatesFilter<"ListActivation"> | number
    listId?: IntNullableWithAggregatesFilter<"ListActivation"> | number | null
  }

  export type ExceptionsOnListsWhereInput = {
    AND?: ExceptionsOnListsWhereInput | ExceptionsOnListsWhereInput[]
    OR?: ExceptionsOnListsWhereInput[]
    NOT?: ExceptionsOnListsWhereInput | ExceptionsOnListsWhereInput[]
    exceptionId?: IntFilter<"ExceptionsOnLists"> | number
    listId?: IntFilter<"ExceptionsOnLists"> | number
    exception?: XOR<ExceptionRelationFilter, ExceptionWhereInput>
    list?: XOR<ListRelationFilter, ListWhereInput>
  }

  export type ExceptionsOnListsOrderByWithRelationInput = {
    exceptionId?: SortOrder
    listId?: SortOrder
    exception?: ExceptionOrderByWithRelationInput
    list?: ListOrderByWithRelationInput
  }

  export type ExceptionsOnListsWhereUniqueInput = Prisma.AtLeast<{
    exceptionId_listId?: ExceptionsOnListsExceptionIdListIdCompoundUniqueInput
    AND?: ExceptionsOnListsWhereInput | ExceptionsOnListsWhereInput[]
    OR?: ExceptionsOnListsWhereInput[]
    NOT?: ExceptionsOnListsWhereInput | ExceptionsOnListsWhereInput[]
    exceptionId?: IntFilter<"ExceptionsOnLists"> | number
    listId?: IntFilter<"ExceptionsOnLists"> | number
    exception?: XOR<ExceptionRelationFilter, ExceptionWhereInput>
    list?: XOR<ListRelationFilter, ListWhereInput>
  }, "exceptionId_listId">

  export type ExceptionsOnListsOrderByWithAggregationInput = {
    exceptionId?: SortOrder
    listId?: SortOrder
    _count?: ExceptionsOnListsCountOrderByAggregateInput
    _avg?: ExceptionsOnListsAvgOrderByAggregateInput
    _max?: ExceptionsOnListsMaxOrderByAggregateInput
    _min?: ExceptionsOnListsMinOrderByAggregateInput
    _sum?: ExceptionsOnListsSumOrderByAggregateInput
  }

  export type ExceptionsOnListsScalarWhereWithAggregatesInput = {
    AND?: ExceptionsOnListsScalarWhereWithAggregatesInput | ExceptionsOnListsScalarWhereWithAggregatesInput[]
    OR?: ExceptionsOnListsScalarWhereWithAggregatesInput[]
    NOT?: ExceptionsOnListsScalarWhereWithAggregatesInput | ExceptionsOnListsScalarWhereWithAggregatesInput[]
    exceptionId?: IntWithAggregatesFilter<"ExceptionsOnLists"> | number
    listId?: IntWithAggregatesFilter<"ExceptionsOnLists"> | number
  }

  export type ExceptionWhereInput = {
    AND?: ExceptionWhereInput | ExceptionWhereInput[]
    OR?: ExceptionWhereInput[]
    NOT?: ExceptionWhereInput | ExceptionWhereInput[]
    id?: IntFilter<"Exception"> | number
    createdAt?: DateTimeFilter<"Exception"> | Date | string
    startDate?: DateTimeNullableFilter<"Exception"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Exception"> | Date | string | null
    studentId?: IntFilter<"Exception"> | number
    presence?: EnumExceptionPresenceFilter<"Exception"> | $Enums.ExceptionPresence
    end?: IntNullableFilter<"Exception"> | number | null
    notes?: StringNullableFilter<"Exception"> | string | null
    SpecificDates?: SpecificDateListRelationFilter
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    ExceptionsOnLists?: ExceptionsOnListsListRelationFilter
  }

  export type ExceptionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    studentId?: SortOrder
    presence?: SortOrder
    end?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    SpecificDates?: SpecificDateOrderByRelationAggregateInput
    Student?: StudentOrderByWithRelationInput
    ExceptionsOnLists?: ExceptionsOnListsOrderByRelationAggregateInput
  }

  export type ExceptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExceptionWhereInput | ExceptionWhereInput[]
    OR?: ExceptionWhereInput[]
    NOT?: ExceptionWhereInput | ExceptionWhereInput[]
    createdAt?: DateTimeFilter<"Exception"> | Date | string
    startDate?: DateTimeNullableFilter<"Exception"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Exception"> | Date | string | null
    studentId?: IntFilter<"Exception"> | number
    presence?: EnumExceptionPresenceFilter<"Exception"> | $Enums.ExceptionPresence
    end?: IntNullableFilter<"Exception"> | number | null
    notes?: StringNullableFilter<"Exception"> | string | null
    SpecificDates?: SpecificDateListRelationFilter
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    ExceptionsOnLists?: ExceptionsOnListsListRelationFilter
  }, "id">

  export type ExceptionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    studentId?: SortOrder
    presence?: SortOrder
    end?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ExceptionCountOrderByAggregateInput
    _avg?: ExceptionAvgOrderByAggregateInput
    _max?: ExceptionMaxOrderByAggregateInput
    _min?: ExceptionMinOrderByAggregateInput
    _sum?: ExceptionSumOrderByAggregateInput
  }

  export type ExceptionScalarWhereWithAggregatesInput = {
    AND?: ExceptionScalarWhereWithAggregatesInput | ExceptionScalarWhereWithAggregatesInput[]
    OR?: ExceptionScalarWhereWithAggregatesInput[]
    NOT?: ExceptionScalarWhereWithAggregatesInput | ExceptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exception"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Exception"> | Date | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Exception"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Exception"> | Date | string | null
    studentId?: IntWithAggregatesFilter<"Exception"> | number
    presence?: EnumExceptionPresenceWithAggregatesFilter<"Exception"> | $Enums.ExceptionPresence
    end?: IntNullableWithAggregatesFilter<"Exception"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Exception"> | string | null
  }

  export type SpecificDateWhereInput = {
    AND?: SpecificDateWhereInput | SpecificDateWhereInput[]
    OR?: SpecificDateWhereInput[]
    NOT?: SpecificDateWhereInput | SpecificDateWhereInput[]
    id?: IntFilter<"SpecificDate"> | number
    exceptionId?: IntFilter<"SpecificDate"> | number
    date?: DateTimeFilter<"SpecificDate"> | Date | string
    exception?: XOR<ExceptionRelationFilter, ExceptionWhereInput>
  }

  export type SpecificDateOrderByWithRelationInput = {
    id?: SortOrder
    exceptionId?: SortOrder
    date?: SortOrder
    exception?: ExceptionOrderByWithRelationInput
  }

  export type SpecificDateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpecificDateWhereInput | SpecificDateWhereInput[]
    OR?: SpecificDateWhereInput[]
    NOT?: SpecificDateWhereInput | SpecificDateWhereInput[]
    exceptionId?: IntFilter<"SpecificDate"> | number
    date?: DateTimeFilter<"SpecificDate"> | Date | string
    exception?: XOR<ExceptionRelationFilter, ExceptionWhereInput>
  }, "id">

  export type SpecificDateOrderByWithAggregationInput = {
    id?: SortOrder
    exceptionId?: SortOrder
    date?: SortOrder
    _count?: SpecificDateCountOrderByAggregateInput
    _avg?: SpecificDateAvgOrderByAggregateInput
    _max?: SpecificDateMaxOrderByAggregateInput
    _min?: SpecificDateMinOrderByAggregateInput
    _sum?: SpecificDateSumOrderByAggregateInput
  }

  export type SpecificDateScalarWhereWithAggregatesInput = {
    AND?: SpecificDateScalarWhereWithAggregatesInput | SpecificDateScalarWhereWithAggregatesInput[]
    OR?: SpecificDateScalarWhereWithAggregatesInput[]
    NOT?: SpecificDateScalarWhereWithAggregatesInput | SpecificDateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpecificDate"> | number
    exceptionId?: IntWithAggregatesFilter<"SpecificDate"> | number
    date?: DateTimeWithAggregatesFilter<"SpecificDate"> | Date | string
  }

  export type StudentCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    visitations?: VisitationCreateNestedManyWithoutStudentInput
    GroupsOnStudents?: GroupsOnStudentsCreateNestedManyWithoutStudentInput
    Exception?: ExceptionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    visitations?: VisitationUncheckedCreateNestedManyWithoutStudentInput
    GroupsOnStudents?: GroupsOnStudentsUncheckedCreateNestedManyWithoutStudentInput
    Exception?: ExceptionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    visitations?: VisitationUpdateManyWithoutStudentNestedInput
    GroupsOnStudents?: GroupsOnStudentsUpdateManyWithoutStudentNestedInput
    Exception?: ExceptionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    visitations?: VisitationUncheckedUpdateManyWithoutStudentNestedInput
    GroupsOnStudents?: GroupsOnStudentsUncheckedUpdateManyWithoutStudentNestedInput
    Exception?: ExceptionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
  }

  export type StudentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    Student: StudentCreateNestedOneWithoutAttendancesInput
    List: ListCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    studentId: number
    listId: number
  }

  export type AttendanceUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    Student?: StudentUpdateOneRequiredWithoutAttendancesNestedInput
    List?: ListUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: IntFieldUpdateOperationsInput | number
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    studentId: number
    listId: number
  }

  export type AttendanceUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: IntFieldUpdateOperationsInput | number
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitationCreateInput = {
    date: Date | string
    start: number
    end?: number | null
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
    Student: StudentCreateNestedOneWithoutVisitationsInput
    List: ListCreateNestedOneWithoutVisitationInput
  }

  export type VisitationUncheckedCreateInput = {
    id?: number
    date: Date | string
    start: number
    end?: number | null
    studentId: number
    listId: number
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
  }

  export type VisitationUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Student?: StudentUpdateOneRequiredWithoutVisitationsNestedInput
    List?: ListUpdateOneRequiredWithoutVisitationNestedInput
  }

  export type VisitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    listId?: IntFieldUpdateOperationsInput | number
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type VisitationCreateManyInput = {
    id?: number
    date: Date | string
    start: number
    end?: number | null
    studentId: number
    listId: number
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
  }

  export type VisitationUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type VisitationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    listId?: IntFieldUpdateOperationsInput | number
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserCreateInput = {
    role?: $Enums.Role
    username: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    role?: $Enums.Role
    username: string
    password: string
  }

  export type UserUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    role?: $Enums.Role
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    name: string
    color?: string | null
    isMainGroup?: boolean
    GroupsOnStudents?: GroupsOnStudentsCreateNestedManyWithoutGroupInput
    list?: ListCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    color?: string | null
    listId?: number | null
    isMainGroup?: boolean
    GroupsOnStudents?: GroupsOnStudentsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
    GroupsOnStudents?: GroupsOnStudentsUpdateManyWithoutGroupNestedInput
    list?: ListUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    listId?: NullableIntFieldUpdateOperationsInput | number | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
    GroupsOnStudents?: GroupsOnStudentsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    color?: string | null
    listId?: number | null
    isMainGroup?: boolean
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    listId?: NullableIntFieldUpdateOperationsInput | number | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupsOnStudentsCreateInput = {
    student: StudentCreateNestedOneWithoutGroupsOnStudentsInput
    group: GroupCreateNestedOneWithoutGroupsOnStudentsInput
  }

  export type GroupsOnStudentsUncheckedCreateInput = {
    studentId: number
    groupId: number
  }

  export type GroupsOnStudentsUpdateInput = {
    student?: StudentUpdateOneRequiredWithoutGroupsOnStudentsNestedInput
    group?: GroupUpdateOneRequiredWithoutGroupsOnStudentsNestedInput
  }

  export type GroupsOnStudentsUncheckedUpdateInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupsOnStudentsCreateManyInput = {
    studentId: number
    groupId: number
  }

  export type GroupsOnStudentsUpdateManyMutationInput = {

  }

  export type GroupsOnStudentsUncheckedUpdateManyInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type ListCreateInput = {
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupCreateNestedManyWithoutListInput
    activations?: ListActivationCreateNestedManyWithoutListInput
    Visitation?: VisitationCreateNestedManyWithoutListInput
    Attendance?: AttendanceCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutListInput
    DayNotes?: DayNotesCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: number
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupUncheckedCreateNestedManyWithoutListInput
    activations?: ListActivationUncheckedCreateNestedManyWithoutListInput
    Visitation?: VisitationUncheckedCreateNestedManyWithoutListInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutListInput
    DayNotes?: DayNotesUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUpdateManyWithoutListNestedInput
    activations?: ListActivationUpdateManyWithoutListNestedInput
    Visitation?: VisitationUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUncheckedUpdateManyWithoutListNestedInput
    activations?: ListActivationUncheckedUpdateManyWithoutListNestedInput
    Visitation?: VisitationUncheckedUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: number
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
  }

  export type ListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DayNotesCreateInput = {
    date: Date | string
    notes: string
    list: ListCreateNestedOneWithoutDayNotesInput
  }

  export type DayNotesUncheckedCreateInput = {
    id?: number
    date: Date | string
    listId: number
    notes: string
  }

  export type DayNotesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    list?: ListUpdateOneRequiredWithoutDayNotesNestedInput
  }

  export type DayNotesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    listId?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type DayNotesCreateManyInput = {
    id?: number
    date: Date | string
    listId: number
    notes: string
  }

  export type DayNotesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type DayNotesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    listId?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type ListActivationCreateInput = {
    day: number
    startTime: number
    startBuffer: number
    endTime: number
    endBuffer: number
    List?: ListCreateNestedOneWithoutActivationsInput
  }

  export type ListActivationUncheckedCreateInput = {
    id?: number
    day: number
    startTime: number
    startBuffer: number
    endTime: number
    endBuffer: number
    listId?: number | null
  }

  export type ListActivationUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    startBuffer?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    endBuffer?: IntFieldUpdateOperationsInput | number
    List?: ListUpdateOneWithoutActivationsNestedInput
  }

  export type ListActivationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    startBuffer?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    endBuffer?: IntFieldUpdateOperationsInput | number
    listId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ListActivationCreateManyInput = {
    id?: number
    day: number
    startTime: number
    startBuffer: number
    endTime: number
    endBuffer: number
    listId?: number | null
  }

  export type ListActivationUpdateManyMutationInput = {
    day?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    startBuffer?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    endBuffer?: IntFieldUpdateOperationsInput | number
  }

  export type ListActivationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    startBuffer?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    endBuffer?: IntFieldUpdateOperationsInput | number
    listId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExceptionsOnListsCreateInput = {
    exception: ExceptionCreateNestedOneWithoutExceptionsOnListsInput
    list: ListCreateNestedOneWithoutExceptionsOnListsInput
  }

  export type ExceptionsOnListsUncheckedCreateInput = {
    exceptionId: number
    listId: number
  }

  export type ExceptionsOnListsUpdateInput = {
    exception?: ExceptionUpdateOneRequiredWithoutExceptionsOnListsNestedInput
    list?: ListUpdateOneRequiredWithoutExceptionsOnListsNestedInput
  }

  export type ExceptionsOnListsUncheckedUpdateInput = {
    exceptionId?: IntFieldUpdateOperationsInput | number
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type ExceptionsOnListsCreateManyInput = {
    exceptionId: number
    listId: number
  }

  export type ExceptionsOnListsUpdateManyMutationInput = {

  }

  export type ExceptionsOnListsUncheckedUpdateManyInput = {
    exceptionId?: IntFieldUpdateOperationsInput | number
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type ExceptionCreateInput = {
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
    SpecificDates?: SpecificDateCreateNestedManyWithoutExceptionInput
    Student: StudentCreateNestedOneWithoutExceptionInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    studentId: number
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
    SpecificDates?: SpecificDateUncheckedCreateNestedManyWithoutExceptionInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    SpecificDates?: SpecificDateUpdateManyWithoutExceptionNestedInput
    Student?: StudentUpdateOneRequiredWithoutExceptionNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    SpecificDates?: SpecificDateUncheckedUpdateManyWithoutExceptionNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    studentId: number
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
  }

  export type ExceptionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExceptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpecificDateCreateInput = {
    date: Date | string
    exception: ExceptionCreateNestedOneWithoutSpecificDatesInput
  }

  export type SpecificDateUncheckedCreateInput = {
    id?: number
    exceptionId: number
    date: Date | string
  }

  export type SpecificDateUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exception?: ExceptionUpdateOneRequiredWithoutSpecificDatesNestedInput
  }

  export type SpecificDateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exceptionId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecificDateCreateManyInput = {
    id?: number
    exceptionId: number
    date: Date | string
  }

  export type SpecificDateUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecificDateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    exceptionId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type VisitationListRelationFilter = {
    every?: VisitationWhereInput
    some?: VisitationWhereInput
    none?: VisitationWhereInput
  }

  export type GroupsOnStudentsListRelationFilter = {
    every?: GroupsOnStudentsWhereInput
    some?: GroupsOnStudentsWhereInput
    none?: GroupsOnStudentsWhereInput
  }

  export type ExceptionListRelationFilter = {
    every?: ExceptionWhereInput
    some?: ExceptionWhereInput
    none?: ExceptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupsOnStudentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExceptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    grade?: SortOrder
    className?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    grade?: SortOrder
    className?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    grade?: SortOrder
    className?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ListRelationFilter = {
    is?: ListWhereInput
    isNot?: ListWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    day?: SortOrder
    end?: SortOrder
    status?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    end?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    day?: SortOrder
    end?: SortOrder
    status?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    day?: SortOrder
    end?: SortOrder
    status?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    end?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type VisitationDateStudentIdListIdCompoundUniqueInput = {
    date: Date | string
    studentId: number
    listId: number
  }

  export type VisitationCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
    startNotes?: SortOrder
    endNotes?: SortOrder
    hasHomework?: SortOrder
  }

  export type VisitationAvgOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
  }

  export type VisitationMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
    startNotes?: SortOrder
    endNotes?: SortOrder
    hasHomework?: SortOrder
  }

  export type VisitationMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    start?: SortOrder
    end?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
    startNotes?: SortOrder
    endNotes?: SortOrder
    hasHomework?: SortOrder
  }

  export type VisitationSumOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    studentId?: SortOrder
    listId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ListNullableRelationFilter = {
    is?: ListWhereInput | null
    isNot?: ListWhereInput | null
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    listId?: SortOrder
    isMainGroup?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    listId?: SortOrder
    isMainGroup?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    listId?: SortOrder
    isMainGroup?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupsOnStudentsStudentIdGroupIdCompoundUniqueInput = {
    studentId: number
    groupId: number
  }

  export type GroupsOnStudentsCountOrderByAggregateInput = {
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type GroupsOnStudentsAvgOrderByAggregateInput = {
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type GroupsOnStudentsMaxOrderByAggregateInput = {
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type GroupsOnStudentsMinOrderByAggregateInput = {
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type GroupsOnStudentsSumOrderByAggregateInput = {
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumRecordTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordTime | EnumRecordTimeFieldRefInput<$PrismaModel>
    in?: $Enums.RecordTime[]
    notIn?: $Enums.RecordTime[]
    not?: NestedEnumRecordTimeFilter<$PrismaModel> | $Enums.RecordTime
  }

  export type EnumTimeManagementFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeManagement | EnumTimeManagementFieldRefInput<$PrismaModel>
    in?: $Enums.TimeManagement[]
    notIn?: $Enums.TimeManagement[]
    not?: NestedEnumTimeManagementFilter<$PrismaModel> | $Enums.TimeManagement
  }

  export type EnumListStudentNotesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListStudentNotes | EnumListStudentNotesFieldRefInput<$PrismaModel>
    in?: $Enums.ListStudentNotes[]
    notIn?: $Enums.ListStudentNotes[]
    not?: NestedEnumListStudentNotesFilter<$PrismaModel> | $Enums.ListStudentNotes
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type ListActivationListRelationFilter = {
    every?: ListActivationWhereInput
    some?: ListActivationWhereInput
    none?: ListActivationWhereInput
  }

  export type ExceptionsOnListsListRelationFilter = {
    every?: ExceptionsOnListsWhereInput
    some?: ExceptionsOnListsWhereInput
    none?: ExceptionsOnListsWhereInput
  }

  export type DayNotesListRelationFilter = {
    every?: DayNotesWhereInput
    some?: DayNotesWhereInput
    none?: DayNotesWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListActivationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExceptionsOnListsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayNotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isMainList?: SortOrder
    recordTime?: SortOrder
    manageTime?: SortOrder
    studentName?: SortOrder
    className?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    groupColor?: SortOrder
  }

  export type ListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isMainList?: SortOrder
    recordTime?: SortOrder
    manageTime?: SortOrder
    studentName?: SortOrder
    className?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    groupColor?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isMainList?: SortOrder
    recordTime?: SortOrder
    manageTime?: SortOrder
    studentName?: SortOrder
    className?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    groupColor?: SortOrder
  }

  export type ListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRecordTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordTime | EnumRecordTimeFieldRefInput<$PrismaModel>
    in?: $Enums.RecordTime[]
    notIn?: $Enums.RecordTime[]
    not?: NestedEnumRecordTimeWithAggregatesFilter<$PrismaModel> | $Enums.RecordTime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordTimeFilter<$PrismaModel>
    _max?: NestedEnumRecordTimeFilter<$PrismaModel>
  }

  export type EnumTimeManagementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeManagement | EnumTimeManagementFieldRefInput<$PrismaModel>
    in?: $Enums.TimeManagement[]
    notIn?: $Enums.TimeManagement[]
    not?: NestedEnumTimeManagementWithAggregatesFilter<$PrismaModel> | $Enums.TimeManagement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeManagementFilter<$PrismaModel>
    _max?: NestedEnumTimeManagementFilter<$PrismaModel>
  }

  export type EnumListStudentNotesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListStudentNotes | EnumListStudentNotesFieldRefInput<$PrismaModel>
    in?: $Enums.ListStudentNotes[]
    notIn?: $Enums.ListStudentNotes[]
    not?: NestedEnumListStudentNotesWithAggregatesFilter<$PrismaModel> | $Enums.ListStudentNotes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListStudentNotesFilter<$PrismaModel>
    _max?: NestedEnumListStudentNotesFilter<$PrismaModel>
  }

  export type DayNotesDateListIdCompoundUniqueInput = {
    date: Date | string
    listId: number
  }

  export type DayNotesCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    listId?: SortOrder
    notes?: SortOrder
  }

  export type DayNotesAvgOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
  }

  export type DayNotesMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    listId?: SortOrder
    notes?: SortOrder
  }

  export type DayNotesMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    listId?: SortOrder
    notes?: SortOrder
  }

  export type DayNotesSumOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
  }

  export type ListActivationCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    startBuffer?: SortOrder
    endTime?: SortOrder
    endBuffer?: SortOrder
    listId?: SortOrder
  }

  export type ListActivationAvgOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    startBuffer?: SortOrder
    endTime?: SortOrder
    endBuffer?: SortOrder
    listId?: SortOrder
  }

  export type ListActivationMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    startBuffer?: SortOrder
    endTime?: SortOrder
    endBuffer?: SortOrder
    listId?: SortOrder
  }

  export type ListActivationMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    startBuffer?: SortOrder
    endTime?: SortOrder
    endBuffer?: SortOrder
    listId?: SortOrder
  }

  export type ListActivationSumOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    startBuffer?: SortOrder
    endTime?: SortOrder
    endBuffer?: SortOrder
    listId?: SortOrder
  }

  export type ExceptionRelationFilter = {
    is?: ExceptionWhereInput
    isNot?: ExceptionWhereInput
  }

  export type ExceptionsOnListsExceptionIdListIdCompoundUniqueInput = {
    exceptionId: number
    listId: number
  }

  export type ExceptionsOnListsCountOrderByAggregateInput = {
    exceptionId?: SortOrder
    listId?: SortOrder
  }

  export type ExceptionsOnListsAvgOrderByAggregateInput = {
    exceptionId?: SortOrder
    listId?: SortOrder
  }

  export type ExceptionsOnListsMaxOrderByAggregateInput = {
    exceptionId?: SortOrder
    listId?: SortOrder
  }

  export type ExceptionsOnListsMinOrderByAggregateInput = {
    exceptionId?: SortOrder
    listId?: SortOrder
  }

  export type ExceptionsOnListsSumOrderByAggregateInput = {
    exceptionId?: SortOrder
    listId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumExceptionPresenceFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionPresence | EnumExceptionPresenceFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionPresence[]
    notIn?: $Enums.ExceptionPresence[]
    not?: NestedEnumExceptionPresenceFilter<$PrismaModel> | $Enums.ExceptionPresence
  }

  export type SpecificDateListRelationFilter = {
    every?: SpecificDateWhereInput
    some?: SpecificDateWhereInput
    none?: SpecificDateWhereInput
  }

  export type SpecificDateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExceptionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    studentId?: SortOrder
    presence?: SortOrder
    end?: SortOrder
    notes?: SortOrder
  }

  export type ExceptionAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    end?: SortOrder
  }

  export type ExceptionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    studentId?: SortOrder
    presence?: SortOrder
    end?: SortOrder
    notes?: SortOrder
  }

  export type ExceptionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    studentId?: SortOrder
    presence?: SortOrder
    end?: SortOrder
    notes?: SortOrder
  }

  export type ExceptionSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    end?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumExceptionPresenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionPresence | EnumExceptionPresenceFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionPresence[]
    notIn?: $Enums.ExceptionPresence[]
    not?: NestedEnumExceptionPresenceWithAggregatesFilter<$PrismaModel> | $Enums.ExceptionPresence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExceptionPresenceFilter<$PrismaModel>
    _max?: NestedEnumExceptionPresenceFilter<$PrismaModel>
  }

  export type SpecificDateCountOrderByAggregateInput = {
    id?: SortOrder
    exceptionId?: SortOrder
    date?: SortOrder
  }

  export type SpecificDateAvgOrderByAggregateInput = {
    id?: SortOrder
    exceptionId?: SortOrder
  }

  export type SpecificDateMaxOrderByAggregateInput = {
    id?: SortOrder
    exceptionId?: SortOrder
    date?: SortOrder
  }

  export type SpecificDateMinOrderByAggregateInput = {
    id?: SortOrder
    exceptionId?: SortOrder
    date?: SortOrder
  }

  export type SpecificDateSumOrderByAggregateInput = {
    id?: SortOrder
    exceptionId?: SortOrder
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type VisitationCreateNestedManyWithoutStudentInput = {
    create?: XOR<VisitationCreateWithoutStudentInput, VisitationUncheckedCreateWithoutStudentInput> | VisitationCreateWithoutStudentInput[] | VisitationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VisitationCreateOrConnectWithoutStudentInput | VisitationCreateOrConnectWithoutStudentInput[]
    createMany?: VisitationCreateManyStudentInputEnvelope
    connect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
  }

  export type GroupsOnStudentsCreateNestedManyWithoutStudentInput = {
    create?: XOR<GroupsOnStudentsCreateWithoutStudentInput, GroupsOnStudentsUncheckedCreateWithoutStudentInput> | GroupsOnStudentsCreateWithoutStudentInput[] | GroupsOnStudentsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GroupsOnStudentsCreateOrConnectWithoutStudentInput | GroupsOnStudentsCreateOrConnectWithoutStudentInput[]
    createMany?: GroupsOnStudentsCreateManyStudentInputEnvelope
    connect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
  }

  export type ExceptionCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExceptionCreateWithoutStudentInput, ExceptionUncheckedCreateWithoutStudentInput> | ExceptionCreateWithoutStudentInput[] | ExceptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutStudentInput | ExceptionCreateOrConnectWithoutStudentInput[]
    createMany?: ExceptionCreateManyStudentInputEnvelope
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type VisitationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<VisitationCreateWithoutStudentInput, VisitationUncheckedCreateWithoutStudentInput> | VisitationCreateWithoutStudentInput[] | VisitationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VisitationCreateOrConnectWithoutStudentInput | VisitationCreateOrConnectWithoutStudentInput[]
    createMany?: VisitationCreateManyStudentInputEnvelope
    connect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
  }

  export type GroupsOnStudentsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<GroupsOnStudentsCreateWithoutStudentInput, GroupsOnStudentsUncheckedCreateWithoutStudentInput> | GroupsOnStudentsCreateWithoutStudentInput[] | GroupsOnStudentsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GroupsOnStudentsCreateOrConnectWithoutStudentInput | GroupsOnStudentsCreateOrConnectWithoutStudentInput[]
    createMany?: GroupsOnStudentsCreateManyStudentInputEnvelope
    connect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
  }

  export type ExceptionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExceptionCreateWithoutStudentInput, ExceptionUncheckedCreateWithoutStudentInput> | ExceptionCreateWithoutStudentInput[] | ExceptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutStudentInput | ExceptionCreateOrConnectWithoutStudentInput[]
    createMany?: ExceptionCreateManyStudentInputEnvelope
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type VisitationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<VisitationCreateWithoutStudentInput, VisitationUncheckedCreateWithoutStudentInput> | VisitationCreateWithoutStudentInput[] | VisitationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VisitationCreateOrConnectWithoutStudentInput | VisitationCreateOrConnectWithoutStudentInput[]
    upsert?: VisitationUpsertWithWhereUniqueWithoutStudentInput | VisitationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: VisitationCreateManyStudentInputEnvelope
    set?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    disconnect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    delete?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    connect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    update?: VisitationUpdateWithWhereUniqueWithoutStudentInput | VisitationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: VisitationUpdateManyWithWhereWithoutStudentInput | VisitationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: VisitationScalarWhereInput | VisitationScalarWhereInput[]
  }

  export type GroupsOnStudentsUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GroupsOnStudentsCreateWithoutStudentInput, GroupsOnStudentsUncheckedCreateWithoutStudentInput> | GroupsOnStudentsCreateWithoutStudentInput[] | GroupsOnStudentsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GroupsOnStudentsCreateOrConnectWithoutStudentInput | GroupsOnStudentsCreateOrConnectWithoutStudentInput[]
    upsert?: GroupsOnStudentsUpsertWithWhereUniqueWithoutStudentInput | GroupsOnStudentsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GroupsOnStudentsCreateManyStudentInputEnvelope
    set?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    disconnect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    delete?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    connect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    update?: GroupsOnStudentsUpdateWithWhereUniqueWithoutStudentInput | GroupsOnStudentsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GroupsOnStudentsUpdateManyWithWhereWithoutStudentInput | GroupsOnStudentsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GroupsOnStudentsScalarWhereInput | GroupsOnStudentsScalarWhereInput[]
  }

  export type ExceptionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExceptionCreateWithoutStudentInput, ExceptionUncheckedCreateWithoutStudentInput> | ExceptionCreateWithoutStudentInput[] | ExceptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutStudentInput | ExceptionCreateOrConnectWithoutStudentInput[]
    upsert?: ExceptionUpsertWithWhereUniqueWithoutStudentInput | ExceptionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExceptionCreateManyStudentInputEnvelope
    set?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    disconnect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    delete?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    update?: ExceptionUpdateWithWhereUniqueWithoutStudentInput | ExceptionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExceptionUpdateManyWithWhereWithoutStudentInput | ExceptionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type VisitationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<VisitationCreateWithoutStudentInput, VisitationUncheckedCreateWithoutStudentInput> | VisitationCreateWithoutStudentInput[] | VisitationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VisitationCreateOrConnectWithoutStudentInput | VisitationCreateOrConnectWithoutStudentInput[]
    upsert?: VisitationUpsertWithWhereUniqueWithoutStudentInput | VisitationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: VisitationCreateManyStudentInputEnvelope
    set?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    disconnect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    delete?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    connect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    update?: VisitationUpdateWithWhereUniqueWithoutStudentInput | VisitationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: VisitationUpdateManyWithWhereWithoutStudentInput | VisitationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: VisitationScalarWhereInput | VisitationScalarWhereInput[]
  }

  export type GroupsOnStudentsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GroupsOnStudentsCreateWithoutStudentInput, GroupsOnStudentsUncheckedCreateWithoutStudentInput> | GroupsOnStudentsCreateWithoutStudentInput[] | GroupsOnStudentsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GroupsOnStudentsCreateOrConnectWithoutStudentInput | GroupsOnStudentsCreateOrConnectWithoutStudentInput[]
    upsert?: GroupsOnStudentsUpsertWithWhereUniqueWithoutStudentInput | GroupsOnStudentsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GroupsOnStudentsCreateManyStudentInputEnvelope
    set?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    disconnect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    delete?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    connect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    update?: GroupsOnStudentsUpdateWithWhereUniqueWithoutStudentInput | GroupsOnStudentsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GroupsOnStudentsUpdateManyWithWhereWithoutStudentInput | GroupsOnStudentsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GroupsOnStudentsScalarWhereInput | GroupsOnStudentsScalarWhereInput[]
  }

  export type ExceptionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExceptionCreateWithoutStudentInput, ExceptionUncheckedCreateWithoutStudentInput> | ExceptionCreateWithoutStudentInput[] | ExceptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExceptionCreateOrConnectWithoutStudentInput | ExceptionCreateOrConnectWithoutStudentInput[]
    upsert?: ExceptionUpsertWithWhereUniqueWithoutStudentInput | ExceptionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExceptionCreateManyStudentInputEnvelope
    set?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    disconnect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    delete?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    connect?: ExceptionWhereUniqueInput | ExceptionWhereUniqueInput[]
    update?: ExceptionUpdateWithWhereUniqueWithoutStudentInput | ExceptionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExceptionUpdateManyWithWhereWithoutStudentInput | ExceptionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendancesInput
    connect?: StudentWhereUniqueInput
  }

  export type ListCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<ListCreateWithoutAttendanceInput, ListUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ListCreateOrConnectWithoutAttendanceInput
    connect?: ListWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type StudentUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendancesInput
    upsert?: StudentUpsertWithoutAttendancesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendancesInput, StudentUpdateWithoutAttendancesInput>, StudentUncheckedUpdateWithoutAttendancesInput>
  }

  export type ListUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<ListCreateWithoutAttendanceInput, ListUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ListCreateOrConnectWithoutAttendanceInput
    upsert?: ListUpsertWithoutAttendanceInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutAttendanceInput, ListUpdateWithoutAttendanceInput>, ListUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentCreateNestedOneWithoutVisitationsInput = {
    create?: XOR<StudentCreateWithoutVisitationsInput, StudentUncheckedCreateWithoutVisitationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutVisitationsInput
    connect?: StudentWhereUniqueInput
  }

  export type ListCreateNestedOneWithoutVisitationInput = {
    create?: XOR<ListCreateWithoutVisitationInput, ListUncheckedCreateWithoutVisitationInput>
    connectOrCreate?: ListCreateOrConnectWithoutVisitationInput
    connect?: ListWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type StudentUpdateOneRequiredWithoutVisitationsNestedInput = {
    create?: XOR<StudentCreateWithoutVisitationsInput, StudentUncheckedCreateWithoutVisitationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutVisitationsInput
    upsert?: StudentUpsertWithoutVisitationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutVisitationsInput, StudentUpdateWithoutVisitationsInput>, StudentUncheckedUpdateWithoutVisitationsInput>
  }

  export type ListUpdateOneRequiredWithoutVisitationNestedInput = {
    create?: XOR<ListCreateWithoutVisitationInput, ListUncheckedCreateWithoutVisitationInput>
    connectOrCreate?: ListCreateOrConnectWithoutVisitationInput
    upsert?: ListUpsertWithoutVisitationInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutVisitationInput, ListUpdateWithoutVisitationInput>, ListUncheckedUpdateWithoutVisitationInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type GroupsOnStudentsCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupsOnStudentsCreateWithoutGroupInput, GroupsOnStudentsUncheckedCreateWithoutGroupInput> | GroupsOnStudentsCreateWithoutGroupInput[] | GroupsOnStudentsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupsOnStudentsCreateOrConnectWithoutGroupInput | GroupsOnStudentsCreateOrConnectWithoutGroupInput[]
    createMany?: GroupsOnStudentsCreateManyGroupInputEnvelope
    connect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
  }

  export type ListCreateNestedOneWithoutGroupInput = {
    create?: XOR<ListCreateWithoutGroupInput, ListUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ListCreateOrConnectWithoutGroupInput
    connect?: ListWhereUniqueInput
  }

  export type GroupsOnStudentsUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupsOnStudentsCreateWithoutGroupInput, GroupsOnStudentsUncheckedCreateWithoutGroupInput> | GroupsOnStudentsCreateWithoutGroupInput[] | GroupsOnStudentsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupsOnStudentsCreateOrConnectWithoutGroupInput | GroupsOnStudentsCreateOrConnectWithoutGroupInput[]
    createMany?: GroupsOnStudentsCreateManyGroupInputEnvelope
    connect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GroupsOnStudentsUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupsOnStudentsCreateWithoutGroupInput, GroupsOnStudentsUncheckedCreateWithoutGroupInput> | GroupsOnStudentsCreateWithoutGroupInput[] | GroupsOnStudentsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupsOnStudentsCreateOrConnectWithoutGroupInput | GroupsOnStudentsCreateOrConnectWithoutGroupInput[]
    upsert?: GroupsOnStudentsUpsertWithWhereUniqueWithoutGroupInput | GroupsOnStudentsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupsOnStudentsCreateManyGroupInputEnvelope
    set?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    disconnect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    delete?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    connect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    update?: GroupsOnStudentsUpdateWithWhereUniqueWithoutGroupInput | GroupsOnStudentsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupsOnStudentsUpdateManyWithWhereWithoutGroupInput | GroupsOnStudentsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupsOnStudentsScalarWhereInput | GroupsOnStudentsScalarWhereInput[]
  }

  export type ListUpdateOneWithoutGroupNestedInput = {
    create?: XOR<ListCreateWithoutGroupInput, ListUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ListCreateOrConnectWithoutGroupInput
    upsert?: ListUpsertWithoutGroupInput
    disconnect?: ListWhereInput | boolean
    delete?: ListWhereInput | boolean
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutGroupInput, ListUpdateWithoutGroupInput>, ListUncheckedUpdateWithoutGroupInput>
  }

  export type GroupsOnStudentsUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupsOnStudentsCreateWithoutGroupInput, GroupsOnStudentsUncheckedCreateWithoutGroupInput> | GroupsOnStudentsCreateWithoutGroupInput[] | GroupsOnStudentsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupsOnStudentsCreateOrConnectWithoutGroupInput | GroupsOnStudentsCreateOrConnectWithoutGroupInput[]
    upsert?: GroupsOnStudentsUpsertWithWhereUniqueWithoutGroupInput | GroupsOnStudentsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupsOnStudentsCreateManyGroupInputEnvelope
    set?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    disconnect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    delete?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    connect?: GroupsOnStudentsWhereUniqueInput | GroupsOnStudentsWhereUniqueInput[]
    update?: GroupsOnStudentsUpdateWithWhereUniqueWithoutGroupInput | GroupsOnStudentsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupsOnStudentsUpdateManyWithWhereWithoutGroupInput | GroupsOnStudentsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupsOnStudentsScalarWhereInput | GroupsOnStudentsScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutGroupsOnStudentsInput = {
    create?: XOR<StudentCreateWithoutGroupsOnStudentsInput, StudentUncheckedCreateWithoutGroupsOnStudentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupsOnStudentsInput
    connect?: StudentWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutGroupsOnStudentsInput = {
    create?: XOR<GroupCreateWithoutGroupsOnStudentsInput, GroupUncheckedCreateWithoutGroupsOnStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupsOnStudentsInput
    connect?: GroupWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutGroupsOnStudentsNestedInput = {
    create?: XOR<StudentCreateWithoutGroupsOnStudentsInput, StudentUncheckedCreateWithoutGroupsOnStudentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupsOnStudentsInput
    upsert?: StudentUpsertWithoutGroupsOnStudentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutGroupsOnStudentsInput, StudentUpdateWithoutGroupsOnStudentsInput>, StudentUncheckedUpdateWithoutGroupsOnStudentsInput>
  }

  export type GroupUpdateOneRequiredWithoutGroupsOnStudentsNestedInput = {
    create?: XOR<GroupCreateWithoutGroupsOnStudentsInput, GroupUncheckedCreateWithoutGroupsOnStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupsOnStudentsInput
    upsert?: GroupUpsertWithoutGroupsOnStudentsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutGroupsOnStudentsInput, GroupUpdateWithoutGroupsOnStudentsInput>, GroupUncheckedUpdateWithoutGroupsOnStudentsInput>
  }

  export type GroupCreateNestedManyWithoutListInput = {
    create?: XOR<GroupCreateWithoutListInput, GroupUncheckedCreateWithoutListInput> | GroupCreateWithoutListInput[] | GroupUncheckedCreateWithoutListInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutListInput | GroupCreateOrConnectWithoutListInput[]
    createMany?: GroupCreateManyListInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ListActivationCreateNestedManyWithoutListInput = {
    create?: XOR<ListActivationCreateWithoutListInput, ListActivationUncheckedCreateWithoutListInput> | ListActivationCreateWithoutListInput[] | ListActivationUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListActivationCreateOrConnectWithoutListInput | ListActivationCreateOrConnectWithoutListInput[]
    createMany?: ListActivationCreateManyListInputEnvelope
    connect?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
  }

  export type VisitationCreateNestedManyWithoutListInput = {
    create?: XOR<VisitationCreateWithoutListInput, VisitationUncheckedCreateWithoutListInput> | VisitationCreateWithoutListInput[] | VisitationUncheckedCreateWithoutListInput[]
    connectOrCreate?: VisitationCreateOrConnectWithoutListInput | VisitationCreateOrConnectWithoutListInput[]
    createMany?: VisitationCreateManyListInputEnvelope
    connect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutListInput = {
    create?: XOR<AttendanceCreateWithoutListInput, AttendanceUncheckedCreateWithoutListInput> | AttendanceCreateWithoutListInput[] | AttendanceUncheckedCreateWithoutListInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutListInput | AttendanceCreateOrConnectWithoutListInput[]
    createMany?: AttendanceCreateManyListInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExceptionsOnListsCreateNestedManyWithoutListInput = {
    create?: XOR<ExceptionsOnListsCreateWithoutListInput, ExceptionsOnListsUncheckedCreateWithoutListInput> | ExceptionsOnListsCreateWithoutListInput[] | ExceptionsOnListsUncheckedCreateWithoutListInput[]
    connectOrCreate?: ExceptionsOnListsCreateOrConnectWithoutListInput | ExceptionsOnListsCreateOrConnectWithoutListInput[]
    createMany?: ExceptionsOnListsCreateManyListInputEnvelope
    connect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
  }

  export type DayNotesCreateNestedManyWithoutListInput = {
    create?: XOR<DayNotesCreateWithoutListInput, DayNotesUncheckedCreateWithoutListInput> | DayNotesCreateWithoutListInput[] | DayNotesUncheckedCreateWithoutListInput[]
    connectOrCreate?: DayNotesCreateOrConnectWithoutListInput | DayNotesCreateOrConnectWithoutListInput[]
    createMany?: DayNotesCreateManyListInputEnvelope
    connect?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<GroupCreateWithoutListInput, GroupUncheckedCreateWithoutListInput> | GroupCreateWithoutListInput[] | GroupUncheckedCreateWithoutListInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutListInput | GroupCreateOrConnectWithoutListInput[]
    createMany?: GroupCreateManyListInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ListActivationUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ListActivationCreateWithoutListInput, ListActivationUncheckedCreateWithoutListInput> | ListActivationCreateWithoutListInput[] | ListActivationUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListActivationCreateOrConnectWithoutListInput | ListActivationCreateOrConnectWithoutListInput[]
    createMany?: ListActivationCreateManyListInputEnvelope
    connect?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
  }

  export type VisitationUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<VisitationCreateWithoutListInput, VisitationUncheckedCreateWithoutListInput> | VisitationCreateWithoutListInput[] | VisitationUncheckedCreateWithoutListInput[]
    connectOrCreate?: VisitationCreateOrConnectWithoutListInput | VisitationCreateOrConnectWithoutListInput[]
    createMany?: VisitationCreateManyListInputEnvelope
    connect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<AttendanceCreateWithoutListInput, AttendanceUncheckedCreateWithoutListInput> | AttendanceCreateWithoutListInput[] | AttendanceUncheckedCreateWithoutListInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutListInput | AttendanceCreateOrConnectWithoutListInput[]
    createMany?: AttendanceCreateManyListInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExceptionsOnListsUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ExceptionsOnListsCreateWithoutListInput, ExceptionsOnListsUncheckedCreateWithoutListInput> | ExceptionsOnListsCreateWithoutListInput[] | ExceptionsOnListsUncheckedCreateWithoutListInput[]
    connectOrCreate?: ExceptionsOnListsCreateOrConnectWithoutListInput | ExceptionsOnListsCreateOrConnectWithoutListInput[]
    createMany?: ExceptionsOnListsCreateManyListInputEnvelope
    connect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
  }

  export type DayNotesUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<DayNotesCreateWithoutListInput, DayNotesUncheckedCreateWithoutListInput> | DayNotesCreateWithoutListInput[] | DayNotesUncheckedCreateWithoutListInput[]
    connectOrCreate?: DayNotesCreateOrConnectWithoutListInput | DayNotesCreateOrConnectWithoutListInput[]
    createMany?: DayNotesCreateManyListInputEnvelope
    connect?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
  }

  export type EnumRecordTimeFieldUpdateOperationsInput = {
    set?: $Enums.RecordTime
  }

  export type EnumTimeManagementFieldUpdateOperationsInput = {
    set?: $Enums.TimeManagement
  }

  export type EnumListStudentNotesFieldUpdateOperationsInput = {
    set?: $Enums.ListStudentNotes
  }

  export type GroupUpdateManyWithoutListNestedInput = {
    create?: XOR<GroupCreateWithoutListInput, GroupUncheckedCreateWithoutListInput> | GroupCreateWithoutListInput[] | GroupUncheckedCreateWithoutListInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutListInput | GroupCreateOrConnectWithoutListInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutListInput | GroupUpsertWithWhereUniqueWithoutListInput[]
    createMany?: GroupCreateManyListInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutListInput | GroupUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutListInput | GroupUpdateManyWithWhereWithoutListInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ListActivationUpdateManyWithoutListNestedInput = {
    create?: XOR<ListActivationCreateWithoutListInput, ListActivationUncheckedCreateWithoutListInput> | ListActivationCreateWithoutListInput[] | ListActivationUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListActivationCreateOrConnectWithoutListInput | ListActivationCreateOrConnectWithoutListInput[]
    upsert?: ListActivationUpsertWithWhereUniqueWithoutListInput | ListActivationUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListActivationCreateManyListInputEnvelope
    set?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
    disconnect?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
    delete?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
    connect?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
    update?: ListActivationUpdateWithWhereUniqueWithoutListInput | ListActivationUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListActivationUpdateManyWithWhereWithoutListInput | ListActivationUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListActivationScalarWhereInput | ListActivationScalarWhereInput[]
  }

  export type VisitationUpdateManyWithoutListNestedInput = {
    create?: XOR<VisitationCreateWithoutListInput, VisitationUncheckedCreateWithoutListInput> | VisitationCreateWithoutListInput[] | VisitationUncheckedCreateWithoutListInput[]
    connectOrCreate?: VisitationCreateOrConnectWithoutListInput | VisitationCreateOrConnectWithoutListInput[]
    upsert?: VisitationUpsertWithWhereUniqueWithoutListInput | VisitationUpsertWithWhereUniqueWithoutListInput[]
    createMany?: VisitationCreateManyListInputEnvelope
    set?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    disconnect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    delete?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    connect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    update?: VisitationUpdateWithWhereUniqueWithoutListInput | VisitationUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: VisitationUpdateManyWithWhereWithoutListInput | VisitationUpdateManyWithWhereWithoutListInput[]
    deleteMany?: VisitationScalarWhereInput | VisitationScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutListNestedInput = {
    create?: XOR<AttendanceCreateWithoutListInput, AttendanceUncheckedCreateWithoutListInput> | AttendanceCreateWithoutListInput[] | AttendanceUncheckedCreateWithoutListInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutListInput | AttendanceCreateOrConnectWithoutListInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutListInput | AttendanceUpsertWithWhereUniqueWithoutListInput[]
    createMany?: AttendanceCreateManyListInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutListInput | AttendanceUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutListInput | AttendanceUpdateManyWithWhereWithoutListInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExceptionsOnListsUpdateManyWithoutListNestedInput = {
    create?: XOR<ExceptionsOnListsCreateWithoutListInput, ExceptionsOnListsUncheckedCreateWithoutListInput> | ExceptionsOnListsCreateWithoutListInput[] | ExceptionsOnListsUncheckedCreateWithoutListInput[]
    connectOrCreate?: ExceptionsOnListsCreateOrConnectWithoutListInput | ExceptionsOnListsCreateOrConnectWithoutListInput[]
    upsert?: ExceptionsOnListsUpsertWithWhereUniqueWithoutListInput | ExceptionsOnListsUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ExceptionsOnListsCreateManyListInputEnvelope
    set?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    disconnect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    delete?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    connect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    update?: ExceptionsOnListsUpdateWithWhereUniqueWithoutListInput | ExceptionsOnListsUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ExceptionsOnListsUpdateManyWithWhereWithoutListInput | ExceptionsOnListsUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ExceptionsOnListsScalarWhereInput | ExceptionsOnListsScalarWhereInput[]
  }

  export type DayNotesUpdateManyWithoutListNestedInput = {
    create?: XOR<DayNotesCreateWithoutListInput, DayNotesUncheckedCreateWithoutListInput> | DayNotesCreateWithoutListInput[] | DayNotesUncheckedCreateWithoutListInput[]
    connectOrCreate?: DayNotesCreateOrConnectWithoutListInput | DayNotesCreateOrConnectWithoutListInput[]
    upsert?: DayNotesUpsertWithWhereUniqueWithoutListInput | DayNotesUpsertWithWhereUniqueWithoutListInput[]
    createMany?: DayNotesCreateManyListInputEnvelope
    set?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
    disconnect?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
    delete?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
    connect?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
    update?: DayNotesUpdateWithWhereUniqueWithoutListInput | DayNotesUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: DayNotesUpdateManyWithWhereWithoutListInput | DayNotesUpdateManyWithWhereWithoutListInput[]
    deleteMany?: DayNotesScalarWhereInput | DayNotesScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<GroupCreateWithoutListInput, GroupUncheckedCreateWithoutListInput> | GroupCreateWithoutListInput[] | GroupUncheckedCreateWithoutListInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutListInput | GroupCreateOrConnectWithoutListInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutListInput | GroupUpsertWithWhereUniqueWithoutListInput[]
    createMany?: GroupCreateManyListInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutListInput | GroupUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutListInput | GroupUpdateManyWithWhereWithoutListInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ListActivationUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ListActivationCreateWithoutListInput, ListActivationUncheckedCreateWithoutListInput> | ListActivationCreateWithoutListInput[] | ListActivationUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListActivationCreateOrConnectWithoutListInput | ListActivationCreateOrConnectWithoutListInput[]
    upsert?: ListActivationUpsertWithWhereUniqueWithoutListInput | ListActivationUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListActivationCreateManyListInputEnvelope
    set?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
    disconnect?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
    delete?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
    connect?: ListActivationWhereUniqueInput | ListActivationWhereUniqueInput[]
    update?: ListActivationUpdateWithWhereUniqueWithoutListInput | ListActivationUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListActivationUpdateManyWithWhereWithoutListInput | ListActivationUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListActivationScalarWhereInput | ListActivationScalarWhereInput[]
  }

  export type VisitationUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<VisitationCreateWithoutListInput, VisitationUncheckedCreateWithoutListInput> | VisitationCreateWithoutListInput[] | VisitationUncheckedCreateWithoutListInput[]
    connectOrCreate?: VisitationCreateOrConnectWithoutListInput | VisitationCreateOrConnectWithoutListInput[]
    upsert?: VisitationUpsertWithWhereUniqueWithoutListInput | VisitationUpsertWithWhereUniqueWithoutListInput[]
    createMany?: VisitationCreateManyListInputEnvelope
    set?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    disconnect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    delete?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    connect?: VisitationWhereUniqueInput | VisitationWhereUniqueInput[]
    update?: VisitationUpdateWithWhereUniqueWithoutListInput | VisitationUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: VisitationUpdateManyWithWhereWithoutListInput | VisitationUpdateManyWithWhereWithoutListInput[]
    deleteMany?: VisitationScalarWhereInput | VisitationScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<AttendanceCreateWithoutListInput, AttendanceUncheckedCreateWithoutListInput> | AttendanceCreateWithoutListInput[] | AttendanceUncheckedCreateWithoutListInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutListInput | AttendanceCreateOrConnectWithoutListInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutListInput | AttendanceUpsertWithWhereUniqueWithoutListInput[]
    createMany?: AttendanceCreateManyListInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutListInput | AttendanceUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutListInput | AttendanceUpdateManyWithWhereWithoutListInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExceptionsOnListsUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ExceptionsOnListsCreateWithoutListInput, ExceptionsOnListsUncheckedCreateWithoutListInput> | ExceptionsOnListsCreateWithoutListInput[] | ExceptionsOnListsUncheckedCreateWithoutListInput[]
    connectOrCreate?: ExceptionsOnListsCreateOrConnectWithoutListInput | ExceptionsOnListsCreateOrConnectWithoutListInput[]
    upsert?: ExceptionsOnListsUpsertWithWhereUniqueWithoutListInput | ExceptionsOnListsUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ExceptionsOnListsCreateManyListInputEnvelope
    set?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    disconnect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    delete?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    connect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    update?: ExceptionsOnListsUpdateWithWhereUniqueWithoutListInput | ExceptionsOnListsUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ExceptionsOnListsUpdateManyWithWhereWithoutListInput | ExceptionsOnListsUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ExceptionsOnListsScalarWhereInput | ExceptionsOnListsScalarWhereInput[]
  }

  export type DayNotesUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<DayNotesCreateWithoutListInput, DayNotesUncheckedCreateWithoutListInput> | DayNotesCreateWithoutListInput[] | DayNotesUncheckedCreateWithoutListInput[]
    connectOrCreate?: DayNotesCreateOrConnectWithoutListInput | DayNotesCreateOrConnectWithoutListInput[]
    upsert?: DayNotesUpsertWithWhereUniqueWithoutListInput | DayNotesUpsertWithWhereUniqueWithoutListInput[]
    createMany?: DayNotesCreateManyListInputEnvelope
    set?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
    disconnect?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
    delete?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
    connect?: DayNotesWhereUniqueInput | DayNotesWhereUniqueInput[]
    update?: DayNotesUpdateWithWhereUniqueWithoutListInput | DayNotesUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: DayNotesUpdateManyWithWhereWithoutListInput | DayNotesUpdateManyWithWhereWithoutListInput[]
    deleteMany?: DayNotesScalarWhereInput | DayNotesScalarWhereInput[]
  }

  export type ListCreateNestedOneWithoutDayNotesInput = {
    create?: XOR<ListCreateWithoutDayNotesInput, ListUncheckedCreateWithoutDayNotesInput>
    connectOrCreate?: ListCreateOrConnectWithoutDayNotesInput
    connect?: ListWhereUniqueInput
  }

  export type ListUpdateOneRequiredWithoutDayNotesNestedInput = {
    create?: XOR<ListCreateWithoutDayNotesInput, ListUncheckedCreateWithoutDayNotesInput>
    connectOrCreate?: ListCreateOrConnectWithoutDayNotesInput
    upsert?: ListUpsertWithoutDayNotesInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutDayNotesInput, ListUpdateWithoutDayNotesInput>, ListUncheckedUpdateWithoutDayNotesInput>
  }

  export type ListCreateNestedOneWithoutActivationsInput = {
    create?: XOR<ListCreateWithoutActivationsInput, ListUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: ListCreateOrConnectWithoutActivationsInput
    connect?: ListWhereUniqueInput
  }

  export type ListUpdateOneWithoutActivationsNestedInput = {
    create?: XOR<ListCreateWithoutActivationsInput, ListUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: ListCreateOrConnectWithoutActivationsInput
    upsert?: ListUpsertWithoutActivationsInput
    disconnect?: ListWhereInput | boolean
    delete?: ListWhereInput | boolean
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutActivationsInput, ListUpdateWithoutActivationsInput>, ListUncheckedUpdateWithoutActivationsInput>
  }

  export type ExceptionCreateNestedOneWithoutExceptionsOnListsInput = {
    create?: XOR<ExceptionCreateWithoutExceptionsOnListsInput, ExceptionUncheckedCreateWithoutExceptionsOnListsInput>
    connectOrCreate?: ExceptionCreateOrConnectWithoutExceptionsOnListsInput
    connect?: ExceptionWhereUniqueInput
  }

  export type ListCreateNestedOneWithoutExceptionsOnListsInput = {
    create?: XOR<ListCreateWithoutExceptionsOnListsInput, ListUncheckedCreateWithoutExceptionsOnListsInput>
    connectOrCreate?: ListCreateOrConnectWithoutExceptionsOnListsInput
    connect?: ListWhereUniqueInput
  }

  export type ExceptionUpdateOneRequiredWithoutExceptionsOnListsNestedInput = {
    create?: XOR<ExceptionCreateWithoutExceptionsOnListsInput, ExceptionUncheckedCreateWithoutExceptionsOnListsInput>
    connectOrCreate?: ExceptionCreateOrConnectWithoutExceptionsOnListsInput
    upsert?: ExceptionUpsertWithoutExceptionsOnListsInput
    connect?: ExceptionWhereUniqueInput
    update?: XOR<XOR<ExceptionUpdateToOneWithWhereWithoutExceptionsOnListsInput, ExceptionUpdateWithoutExceptionsOnListsInput>, ExceptionUncheckedUpdateWithoutExceptionsOnListsInput>
  }

  export type ListUpdateOneRequiredWithoutExceptionsOnListsNestedInput = {
    create?: XOR<ListCreateWithoutExceptionsOnListsInput, ListUncheckedCreateWithoutExceptionsOnListsInput>
    connectOrCreate?: ListCreateOrConnectWithoutExceptionsOnListsInput
    upsert?: ListUpsertWithoutExceptionsOnListsInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutExceptionsOnListsInput, ListUpdateWithoutExceptionsOnListsInput>, ListUncheckedUpdateWithoutExceptionsOnListsInput>
  }

  export type SpecificDateCreateNestedManyWithoutExceptionInput = {
    create?: XOR<SpecificDateCreateWithoutExceptionInput, SpecificDateUncheckedCreateWithoutExceptionInput> | SpecificDateCreateWithoutExceptionInput[] | SpecificDateUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: SpecificDateCreateOrConnectWithoutExceptionInput | SpecificDateCreateOrConnectWithoutExceptionInput[]
    createMany?: SpecificDateCreateManyExceptionInputEnvelope
    connect?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutExceptionInput = {
    create?: XOR<StudentCreateWithoutExceptionInput, StudentUncheckedCreateWithoutExceptionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutExceptionInput
    connect?: StudentWhereUniqueInput
  }

  export type ExceptionsOnListsCreateNestedManyWithoutExceptionInput = {
    create?: XOR<ExceptionsOnListsCreateWithoutExceptionInput, ExceptionsOnListsUncheckedCreateWithoutExceptionInput> | ExceptionsOnListsCreateWithoutExceptionInput[] | ExceptionsOnListsUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: ExceptionsOnListsCreateOrConnectWithoutExceptionInput | ExceptionsOnListsCreateOrConnectWithoutExceptionInput[]
    createMany?: ExceptionsOnListsCreateManyExceptionInputEnvelope
    connect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
  }

  export type SpecificDateUncheckedCreateNestedManyWithoutExceptionInput = {
    create?: XOR<SpecificDateCreateWithoutExceptionInput, SpecificDateUncheckedCreateWithoutExceptionInput> | SpecificDateCreateWithoutExceptionInput[] | SpecificDateUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: SpecificDateCreateOrConnectWithoutExceptionInput | SpecificDateCreateOrConnectWithoutExceptionInput[]
    createMany?: SpecificDateCreateManyExceptionInputEnvelope
    connect?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
  }

  export type ExceptionsOnListsUncheckedCreateNestedManyWithoutExceptionInput = {
    create?: XOR<ExceptionsOnListsCreateWithoutExceptionInput, ExceptionsOnListsUncheckedCreateWithoutExceptionInput> | ExceptionsOnListsCreateWithoutExceptionInput[] | ExceptionsOnListsUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: ExceptionsOnListsCreateOrConnectWithoutExceptionInput | ExceptionsOnListsCreateOrConnectWithoutExceptionInput[]
    createMany?: ExceptionsOnListsCreateManyExceptionInputEnvelope
    connect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumExceptionPresenceFieldUpdateOperationsInput = {
    set?: $Enums.ExceptionPresence
  }

  export type SpecificDateUpdateManyWithoutExceptionNestedInput = {
    create?: XOR<SpecificDateCreateWithoutExceptionInput, SpecificDateUncheckedCreateWithoutExceptionInput> | SpecificDateCreateWithoutExceptionInput[] | SpecificDateUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: SpecificDateCreateOrConnectWithoutExceptionInput | SpecificDateCreateOrConnectWithoutExceptionInput[]
    upsert?: SpecificDateUpsertWithWhereUniqueWithoutExceptionInput | SpecificDateUpsertWithWhereUniqueWithoutExceptionInput[]
    createMany?: SpecificDateCreateManyExceptionInputEnvelope
    set?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
    disconnect?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
    delete?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
    connect?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
    update?: SpecificDateUpdateWithWhereUniqueWithoutExceptionInput | SpecificDateUpdateWithWhereUniqueWithoutExceptionInput[]
    updateMany?: SpecificDateUpdateManyWithWhereWithoutExceptionInput | SpecificDateUpdateManyWithWhereWithoutExceptionInput[]
    deleteMany?: SpecificDateScalarWhereInput | SpecificDateScalarWhereInput[]
  }

  export type StudentUpdateOneRequiredWithoutExceptionNestedInput = {
    create?: XOR<StudentCreateWithoutExceptionInput, StudentUncheckedCreateWithoutExceptionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutExceptionInput
    upsert?: StudentUpsertWithoutExceptionInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutExceptionInput, StudentUpdateWithoutExceptionInput>, StudentUncheckedUpdateWithoutExceptionInput>
  }

  export type ExceptionsOnListsUpdateManyWithoutExceptionNestedInput = {
    create?: XOR<ExceptionsOnListsCreateWithoutExceptionInput, ExceptionsOnListsUncheckedCreateWithoutExceptionInput> | ExceptionsOnListsCreateWithoutExceptionInput[] | ExceptionsOnListsUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: ExceptionsOnListsCreateOrConnectWithoutExceptionInput | ExceptionsOnListsCreateOrConnectWithoutExceptionInput[]
    upsert?: ExceptionsOnListsUpsertWithWhereUniqueWithoutExceptionInput | ExceptionsOnListsUpsertWithWhereUniqueWithoutExceptionInput[]
    createMany?: ExceptionsOnListsCreateManyExceptionInputEnvelope
    set?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    disconnect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    delete?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    connect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    update?: ExceptionsOnListsUpdateWithWhereUniqueWithoutExceptionInput | ExceptionsOnListsUpdateWithWhereUniqueWithoutExceptionInput[]
    updateMany?: ExceptionsOnListsUpdateManyWithWhereWithoutExceptionInput | ExceptionsOnListsUpdateManyWithWhereWithoutExceptionInput[]
    deleteMany?: ExceptionsOnListsScalarWhereInput | ExceptionsOnListsScalarWhereInput[]
  }

  export type SpecificDateUncheckedUpdateManyWithoutExceptionNestedInput = {
    create?: XOR<SpecificDateCreateWithoutExceptionInput, SpecificDateUncheckedCreateWithoutExceptionInput> | SpecificDateCreateWithoutExceptionInput[] | SpecificDateUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: SpecificDateCreateOrConnectWithoutExceptionInput | SpecificDateCreateOrConnectWithoutExceptionInput[]
    upsert?: SpecificDateUpsertWithWhereUniqueWithoutExceptionInput | SpecificDateUpsertWithWhereUniqueWithoutExceptionInput[]
    createMany?: SpecificDateCreateManyExceptionInputEnvelope
    set?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
    disconnect?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
    delete?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
    connect?: SpecificDateWhereUniqueInput | SpecificDateWhereUniqueInput[]
    update?: SpecificDateUpdateWithWhereUniqueWithoutExceptionInput | SpecificDateUpdateWithWhereUniqueWithoutExceptionInput[]
    updateMany?: SpecificDateUpdateManyWithWhereWithoutExceptionInput | SpecificDateUpdateManyWithWhereWithoutExceptionInput[]
    deleteMany?: SpecificDateScalarWhereInput | SpecificDateScalarWhereInput[]
  }

  export type ExceptionsOnListsUncheckedUpdateManyWithoutExceptionNestedInput = {
    create?: XOR<ExceptionsOnListsCreateWithoutExceptionInput, ExceptionsOnListsUncheckedCreateWithoutExceptionInput> | ExceptionsOnListsCreateWithoutExceptionInput[] | ExceptionsOnListsUncheckedCreateWithoutExceptionInput[]
    connectOrCreate?: ExceptionsOnListsCreateOrConnectWithoutExceptionInput | ExceptionsOnListsCreateOrConnectWithoutExceptionInput[]
    upsert?: ExceptionsOnListsUpsertWithWhereUniqueWithoutExceptionInput | ExceptionsOnListsUpsertWithWhereUniqueWithoutExceptionInput[]
    createMany?: ExceptionsOnListsCreateManyExceptionInputEnvelope
    set?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    disconnect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    delete?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    connect?: ExceptionsOnListsWhereUniqueInput | ExceptionsOnListsWhereUniqueInput[]
    update?: ExceptionsOnListsUpdateWithWhereUniqueWithoutExceptionInput | ExceptionsOnListsUpdateWithWhereUniqueWithoutExceptionInput[]
    updateMany?: ExceptionsOnListsUpdateManyWithWhereWithoutExceptionInput | ExceptionsOnListsUpdateManyWithWhereWithoutExceptionInput[]
    deleteMany?: ExceptionsOnListsScalarWhereInput | ExceptionsOnListsScalarWhereInput[]
  }

  export type ExceptionCreateNestedOneWithoutSpecificDatesInput = {
    create?: XOR<ExceptionCreateWithoutSpecificDatesInput, ExceptionUncheckedCreateWithoutSpecificDatesInput>
    connectOrCreate?: ExceptionCreateOrConnectWithoutSpecificDatesInput
    connect?: ExceptionWhereUniqueInput
  }

  export type ExceptionUpdateOneRequiredWithoutSpecificDatesNestedInput = {
    create?: XOR<ExceptionCreateWithoutSpecificDatesInput, ExceptionUncheckedCreateWithoutSpecificDatesInput>
    connectOrCreate?: ExceptionCreateOrConnectWithoutSpecificDatesInput
    upsert?: ExceptionUpsertWithoutSpecificDatesInput
    connect?: ExceptionWhereUniqueInput
    update?: XOR<XOR<ExceptionUpdateToOneWithWhereWithoutSpecificDatesInput, ExceptionUpdateWithoutSpecificDatesInput>, ExceptionUncheckedUpdateWithoutSpecificDatesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRecordTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordTime | EnumRecordTimeFieldRefInput<$PrismaModel>
    in?: $Enums.RecordTime[]
    notIn?: $Enums.RecordTime[]
    not?: NestedEnumRecordTimeFilter<$PrismaModel> | $Enums.RecordTime
  }

  export type NestedEnumTimeManagementFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeManagement | EnumTimeManagementFieldRefInput<$PrismaModel>
    in?: $Enums.TimeManagement[]
    notIn?: $Enums.TimeManagement[]
    not?: NestedEnumTimeManagementFilter<$PrismaModel> | $Enums.TimeManagement
  }

  export type NestedEnumListStudentNotesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListStudentNotes | EnumListStudentNotesFieldRefInput<$PrismaModel>
    in?: $Enums.ListStudentNotes[]
    notIn?: $Enums.ListStudentNotes[]
    not?: NestedEnumListStudentNotesFilter<$PrismaModel> | $Enums.ListStudentNotes
  }

  export type NestedEnumRecordTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordTime | EnumRecordTimeFieldRefInput<$PrismaModel>
    in?: $Enums.RecordTime[]
    notIn?: $Enums.RecordTime[]
    not?: NestedEnumRecordTimeWithAggregatesFilter<$PrismaModel> | $Enums.RecordTime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordTimeFilter<$PrismaModel>
    _max?: NestedEnumRecordTimeFilter<$PrismaModel>
  }

  export type NestedEnumTimeManagementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeManagement | EnumTimeManagementFieldRefInput<$PrismaModel>
    in?: $Enums.TimeManagement[]
    notIn?: $Enums.TimeManagement[]
    not?: NestedEnumTimeManagementWithAggregatesFilter<$PrismaModel> | $Enums.TimeManagement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeManagementFilter<$PrismaModel>
    _max?: NestedEnumTimeManagementFilter<$PrismaModel>
  }

  export type NestedEnumListStudentNotesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListStudentNotes | EnumListStudentNotesFieldRefInput<$PrismaModel>
    in?: $Enums.ListStudentNotes[]
    notIn?: $Enums.ListStudentNotes[]
    not?: NestedEnumListStudentNotesWithAggregatesFilter<$PrismaModel> | $Enums.ListStudentNotes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListStudentNotesFilter<$PrismaModel>
    _max?: NestedEnumListStudentNotesFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumExceptionPresenceFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionPresence | EnumExceptionPresenceFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionPresence[]
    notIn?: $Enums.ExceptionPresence[]
    not?: NestedEnumExceptionPresenceFilter<$PrismaModel> | $Enums.ExceptionPresence
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumExceptionPresenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExceptionPresence | EnumExceptionPresenceFieldRefInput<$PrismaModel>
    in?: $Enums.ExceptionPresence[]
    notIn?: $Enums.ExceptionPresence[]
    not?: NestedEnumExceptionPresenceWithAggregatesFilter<$PrismaModel> | $Enums.ExceptionPresence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExceptionPresenceFilter<$PrismaModel>
    _max?: NestedEnumExceptionPresenceFilter<$PrismaModel>
  }

  export type AttendanceCreateWithoutStudentInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    List: ListCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    listId: number
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type VisitationCreateWithoutStudentInput = {
    date: Date | string
    start: number
    end?: number | null
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
    List: ListCreateNestedOneWithoutVisitationInput
  }

  export type VisitationUncheckedCreateWithoutStudentInput = {
    id?: number
    date: Date | string
    start: number
    end?: number | null
    listId: number
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
  }

  export type VisitationCreateOrConnectWithoutStudentInput = {
    where: VisitationWhereUniqueInput
    create: XOR<VisitationCreateWithoutStudentInput, VisitationUncheckedCreateWithoutStudentInput>
  }

  export type VisitationCreateManyStudentInputEnvelope = {
    data: VisitationCreateManyStudentInput | VisitationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type GroupsOnStudentsCreateWithoutStudentInput = {
    group: GroupCreateNestedOneWithoutGroupsOnStudentsInput
  }

  export type GroupsOnStudentsUncheckedCreateWithoutStudentInput = {
    groupId: number
  }

  export type GroupsOnStudentsCreateOrConnectWithoutStudentInput = {
    where: GroupsOnStudentsWhereUniqueInput
    create: XOR<GroupsOnStudentsCreateWithoutStudentInput, GroupsOnStudentsUncheckedCreateWithoutStudentInput>
  }

  export type GroupsOnStudentsCreateManyStudentInputEnvelope = {
    data: GroupsOnStudentsCreateManyStudentInput | GroupsOnStudentsCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ExceptionCreateWithoutStudentInput = {
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
    SpecificDates?: SpecificDateCreateNestedManyWithoutExceptionInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionUncheckedCreateWithoutStudentInput = {
    id?: number
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
    SpecificDates?: SpecificDateUncheckedCreateNestedManyWithoutExceptionInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionCreateOrConnectWithoutStudentInput = {
    where: ExceptionWhereUniqueInput
    create: XOR<ExceptionCreateWithoutStudentInput, ExceptionUncheckedCreateWithoutStudentInput>
  }

  export type ExceptionCreateManyStudentInputEnvelope = {
    data: ExceptionCreateManyStudentInput | ExceptionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    day?: IntFilter<"Attendance"> | number
    end?: IntFilter<"Attendance"> | number
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    studentId?: IntFilter<"Attendance"> | number
    listId?: IntFilter<"Attendance"> | number
  }

  export type VisitationUpsertWithWhereUniqueWithoutStudentInput = {
    where: VisitationWhereUniqueInput
    update: XOR<VisitationUpdateWithoutStudentInput, VisitationUncheckedUpdateWithoutStudentInput>
    create: XOR<VisitationCreateWithoutStudentInput, VisitationUncheckedCreateWithoutStudentInput>
  }

  export type VisitationUpdateWithWhereUniqueWithoutStudentInput = {
    where: VisitationWhereUniqueInput
    data: XOR<VisitationUpdateWithoutStudentInput, VisitationUncheckedUpdateWithoutStudentInput>
  }

  export type VisitationUpdateManyWithWhereWithoutStudentInput = {
    where: VisitationScalarWhereInput
    data: XOR<VisitationUpdateManyMutationInput, VisitationUncheckedUpdateManyWithoutStudentInput>
  }

  export type VisitationScalarWhereInput = {
    AND?: VisitationScalarWhereInput | VisitationScalarWhereInput[]
    OR?: VisitationScalarWhereInput[]
    NOT?: VisitationScalarWhereInput | VisitationScalarWhereInput[]
    id?: IntFilter<"Visitation"> | number
    date?: DateTimeFilter<"Visitation"> | Date | string
    start?: IntFilter<"Visitation"> | number
    end?: IntNullableFilter<"Visitation"> | number | null
    studentId?: IntFilter<"Visitation"> | number
    listId?: IntFilter<"Visitation"> | number
    startNotes?: StringNullableFilter<"Visitation"> | string | null
    endNotes?: StringNullableFilter<"Visitation"> | string | null
    hasHomework?: BoolNullableFilter<"Visitation"> | boolean | null
  }

  export type GroupsOnStudentsUpsertWithWhereUniqueWithoutStudentInput = {
    where: GroupsOnStudentsWhereUniqueInput
    update: XOR<GroupsOnStudentsUpdateWithoutStudentInput, GroupsOnStudentsUncheckedUpdateWithoutStudentInput>
    create: XOR<GroupsOnStudentsCreateWithoutStudentInput, GroupsOnStudentsUncheckedCreateWithoutStudentInput>
  }

  export type GroupsOnStudentsUpdateWithWhereUniqueWithoutStudentInput = {
    where: GroupsOnStudentsWhereUniqueInput
    data: XOR<GroupsOnStudentsUpdateWithoutStudentInput, GroupsOnStudentsUncheckedUpdateWithoutStudentInput>
  }

  export type GroupsOnStudentsUpdateManyWithWhereWithoutStudentInput = {
    where: GroupsOnStudentsScalarWhereInput
    data: XOR<GroupsOnStudentsUpdateManyMutationInput, GroupsOnStudentsUncheckedUpdateManyWithoutStudentInput>
  }

  export type GroupsOnStudentsScalarWhereInput = {
    AND?: GroupsOnStudentsScalarWhereInput | GroupsOnStudentsScalarWhereInput[]
    OR?: GroupsOnStudentsScalarWhereInput[]
    NOT?: GroupsOnStudentsScalarWhereInput | GroupsOnStudentsScalarWhereInput[]
    studentId?: IntFilter<"GroupsOnStudents"> | number
    groupId?: IntFilter<"GroupsOnStudents"> | number
  }

  export type ExceptionUpsertWithWhereUniqueWithoutStudentInput = {
    where: ExceptionWhereUniqueInput
    update: XOR<ExceptionUpdateWithoutStudentInput, ExceptionUncheckedUpdateWithoutStudentInput>
    create: XOR<ExceptionCreateWithoutStudentInput, ExceptionUncheckedCreateWithoutStudentInput>
  }

  export type ExceptionUpdateWithWhereUniqueWithoutStudentInput = {
    where: ExceptionWhereUniqueInput
    data: XOR<ExceptionUpdateWithoutStudentInput, ExceptionUncheckedUpdateWithoutStudentInput>
  }

  export type ExceptionUpdateManyWithWhereWithoutStudentInput = {
    where: ExceptionScalarWhereInput
    data: XOR<ExceptionUpdateManyMutationInput, ExceptionUncheckedUpdateManyWithoutStudentInput>
  }

  export type ExceptionScalarWhereInput = {
    AND?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
    OR?: ExceptionScalarWhereInput[]
    NOT?: ExceptionScalarWhereInput | ExceptionScalarWhereInput[]
    id?: IntFilter<"Exception"> | number
    createdAt?: DateTimeFilter<"Exception"> | Date | string
    startDate?: DateTimeNullableFilter<"Exception"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Exception"> | Date | string | null
    studentId?: IntFilter<"Exception"> | number
    presence?: EnumExceptionPresenceFilter<"Exception"> | $Enums.ExceptionPresence
    end?: IntNullableFilter<"Exception"> | number | null
    notes?: StringNullableFilter<"Exception"> | string | null
  }

  export type StudentCreateWithoutAttendancesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    visitations?: VisitationCreateNestedManyWithoutStudentInput
    GroupsOnStudents?: GroupsOnStudentsCreateNestedManyWithoutStudentInput
    Exception?: ExceptionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendancesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    visitations?: VisitationUncheckedCreateNestedManyWithoutStudentInput
    GroupsOnStudents?: GroupsOnStudentsUncheckedCreateNestedManyWithoutStudentInput
    Exception?: ExceptionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendancesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
  }

  export type ListCreateWithoutAttendanceInput = {
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupCreateNestedManyWithoutListInput
    activations?: ListActivationCreateNestedManyWithoutListInput
    Visitation?: VisitationCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutListInput
    DayNotes?: DayNotesCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutAttendanceInput = {
    id?: number
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupUncheckedCreateNestedManyWithoutListInput
    activations?: ListActivationUncheckedCreateNestedManyWithoutListInput
    Visitation?: VisitationUncheckedCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutListInput
    DayNotes?: DayNotesUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutAttendanceInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutAttendanceInput, ListUncheckedCreateWithoutAttendanceInput>
  }

  export type StudentUpsertWithoutAttendancesInput = {
    update: XOR<StudentUpdateWithoutAttendancesInput, StudentUncheckedUpdateWithoutAttendancesInput>
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendancesInput, StudentUncheckedUpdateWithoutAttendancesInput>
  }

  export type StudentUpdateWithoutAttendancesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    visitations?: VisitationUpdateManyWithoutStudentNestedInput
    GroupsOnStudents?: GroupsOnStudentsUpdateManyWithoutStudentNestedInput
    Exception?: ExceptionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    visitations?: VisitationUncheckedUpdateManyWithoutStudentNestedInput
    GroupsOnStudents?: GroupsOnStudentsUncheckedUpdateManyWithoutStudentNestedInput
    Exception?: ExceptionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ListUpsertWithoutAttendanceInput = {
    update: XOR<ListUpdateWithoutAttendanceInput, ListUncheckedUpdateWithoutAttendanceInput>
    create: XOR<ListCreateWithoutAttendanceInput, ListUncheckedCreateWithoutAttendanceInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutAttendanceInput, ListUncheckedUpdateWithoutAttendanceInput>
  }

  export type ListUpdateWithoutAttendanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUpdateManyWithoutListNestedInput
    activations?: ListActivationUpdateManyWithoutListNestedInput
    Visitation?: VisitationUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUncheckedUpdateManyWithoutListNestedInput
    activations?: ListActivationUncheckedUpdateManyWithoutListNestedInput
    Visitation?: VisitationUncheckedUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUncheckedUpdateManyWithoutListNestedInput
  }

  export type StudentCreateWithoutVisitationsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    GroupsOnStudents?: GroupsOnStudentsCreateNestedManyWithoutStudentInput
    Exception?: ExceptionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutVisitationsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    GroupsOnStudents?: GroupsOnStudentsUncheckedCreateNestedManyWithoutStudentInput
    Exception?: ExceptionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutVisitationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutVisitationsInput, StudentUncheckedCreateWithoutVisitationsInput>
  }

  export type ListCreateWithoutVisitationInput = {
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupCreateNestedManyWithoutListInput
    activations?: ListActivationCreateNestedManyWithoutListInput
    Attendance?: AttendanceCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutListInput
    DayNotes?: DayNotesCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutVisitationInput = {
    id?: number
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupUncheckedCreateNestedManyWithoutListInput
    activations?: ListActivationUncheckedCreateNestedManyWithoutListInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutListInput
    DayNotes?: DayNotesUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutVisitationInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutVisitationInput, ListUncheckedCreateWithoutVisitationInput>
  }

  export type StudentUpsertWithoutVisitationsInput = {
    update: XOR<StudentUpdateWithoutVisitationsInput, StudentUncheckedUpdateWithoutVisitationsInput>
    create: XOR<StudentCreateWithoutVisitationsInput, StudentUncheckedCreateWithoutVisitationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutVisitationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutVisitationsInput, StudentUncheckedUpdateWithoutVisitationsInput>
  }

  export type StudentUpdateWithoutVisitationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    GroupsOnStudents?: GroupsOnStudentsUpdateManyWithoutStudentNestedInput
    Exception?: ExceptionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutVisitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    GroupsOnStudents?: GroupsOnStudentsUncheckedUpdateManyWithoutStudentNestedInput
    Exception?: ExceptionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ListUpsertWithoutVisitationInput = {
    update: XOR<ListUpdateWithoutVisitationInput, ListUncheckedUpdateWithoutVisitationInput>
    create: XOR<ListCreateWithoutVisitationInput, ListUncheckedCreateWithoutVisitationInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutVisitationInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutVisitationInput, ListUncheckedUpdateWithoutVisitationInput>
  }

  export type ListUpdateWithoutVisitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUpdateManyWithoutListNestedInput
    activations?: ListActivationUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutVisitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUncheckedUpdateManyWithoutListNestedInput
    activations?: ListActivationUncheckedUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUncheckedUpdateManyWithoutListNestedInput
  }

  export type GroupsOnStudentsCreateWithoutGroupInput = {
    student: StudentCreateNestedOneWithoutGroupsOnStudentsInput
  }

  export type GroupsOnStudentsUncheckedCreateWithoutGroupInput = {
    studentId: number
  }

  export type GroupsOnStudentsCreateOrConnectWithoutGroupInput = {
    where: GroupsOnStudentsWhereUniqueInput
    create: XOR<GroupsOnStudentsCreateWithoutGroupInput, GroupsOnStudentsUncheckedCreateWithoutGroupInput>
  }

  export type GroupsOnStudentsCreateManyGroupInputEnvelope = {
    data: GroupsOnStudentsCreateManyGroupInput | GroupsOnStudentsCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ListCreateWithoutGroupInput = {
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    activations?: ListActivationCreateNestedManyWithoutListInput
    Visitation?: VisitationCreateNestedManyWithoutListInput
    Attendance?: AttendanceCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutListInput
    DayNotes?: DayNotesCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutGroupInput = {
    id?: number
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    activations?: ListActivationUncheckedCreateNestedManyWithoutListInput
    Visitation?: VisitationUncheckedCreateNestedManyWithoutListInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutListInput
    DayNotes?: DayNotesUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutGroupInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutGroupInput, ListUncheckedCreateWithoutGroupInput>
  }

  export type GroupsOnStudentsUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupsOnStudentsWhereUniqueInput
    update: XOR<GroupsOnStudentsUpdateWithoutGroupInput, GroupsOnStudentsUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupsOnStudentsCreateWithoutGroupInput, GroupsOnStudentsUncheckedCreateWithoutGroupInput>
  }

  export type GroupsOnStudentsUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupsOnStudentsWhereUniqueInput
    data: XOR<GroupsOnStudentsUpdateWithoutGroupInput, GroupsOnStudentsUncheckedUpdateWithoutGroupInput>
  }

  export type GroupsOnStudentsUpdateManyWithWhereWithoutGroupInput = {
    where: GroupsOnStudentsScalarWhereInput
    data: XOR<GroupsOnStudentsUpdateManyMutationInput, GroupsOnStudentsUncheckedUpdateManyWithoutGroupInput>
  }

  export type ListUpsertWithoutGroupInput = {
    update: XOR<ListUpdateWithoutGroupInput, ListUncheckedUpdateWithoutGroupInput>
    create: XOR<ListCreateWithoutGroupInput, ListUncheckedCreateWithoutGroupInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutGroupInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutGroupInput, ListUncheckedUpdateWithoutGroupInput>
  }

  export type ListUpdateWithoutGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    activations?: ListActivationUpdateManyWithoutListNestedInput
    Visitation?: VisitationUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    activations?: ListActivationUncheckedUpdateManyWithoutListNestedInput
    Visitation?: VisitationUncheckedUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUncheckedUpdateManyWithoutListNestedInput
  }

  export type StudentCreateWithoutGroupsOnStudentsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    visitations?: VisitationCreateNestedManyWithoutStudentInput
    Exception?: ExceptionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGroupsOnStudentsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    visitations?: VisitationUncheckedCreateNestedManyWithoutStudentInput
    Exception?: ExceptionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGroupsOnStudentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupsOnStudentsInput, StudentUncheckedCreateWithoutGroupsOnStudentsInput>
  }

  export type GroupCreateWithoutGroupsOnStudentsInput = {
    name: string
    color?: string | null
    isMainGroup?: boolean
    list?: ListCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutGroupsOnStudentsInput = {
    id?: number
    name: string
    color?: string | null
    listId?: number | null
    isMainGroup?: boolean
  }

  export type GroupCreateOrConnectWithoutGroupsOnStudentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutGroupsOnStudentsInput, GroupUncheckedCreateWithoutGroupsOnStudentsInput>
  }

  export type StudentUpsertWithoutGroupsOnStudentsInput = {
    update: XOR<StudentUpdateWithoutGroupsOnStudentsInput, StudentUncheckedUpdateWithoutGroupsOnStudentsInput>
    create: XOR<StudentCreateWithoutGroupsOnStudentsInput, StudentUncheckedCreateWithoutGroupsOnStudentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutGroupsOnStudentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutGroupsOnStudentsInput, StudentUncheckedUpdateWithoutGroupsOnStudentsInput>
  }

  export type StudentUpdateWithoutGroupsOnStudentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    visitations?: VisitationUpdateManyWithoutStudentNestedInput
    Exception?: ExceptionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupsOnStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    visitations?: VisitationUncheckedUpdateManyWithoutStudentNestedInput
    Exception?: ExceptionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type GroupUpsertWithoutGroupsOnStudentsInput = {
    update: XOR<GroupUpdateWithoutGroupsOnStudentsInput, GroupUncheckedUpdateWithoutGroupsOnStudentsInput>
    create: XOR<GroupCreateWithoutGroupsOnStudentsInput, GroupUncheckedCreateWithoutGroupsOnStudentsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutGroupsOnStudentsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutGroupsOnStudentsInput, GroupUncheckedUpdateWithoutGroupsOnStudentsInput>
  }

  export type GroupUpdateWithoutGroupsOnStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
    list?: ListUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutGroupsOnStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    listId?: NullableIntFieldUpdateOperationsInput | number | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupCreateWithoutListInput = {
    name: string
    color?: string | null
    isMainGroup?: boolean
    GroupsOnStudents?: GroupsOnStudentsCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutListInput = {
    id?: number
    name: string
    color?: string | null
    isMainGroup?: boolean
    GroupsOnStudents?: GroupsOnStudentsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutListInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutListInput, GroupUncheckedCreateWithoutListInput>
  }

  export type GroupCreateManyListInputEnvelope = {
    data: GroupCreateManyListInput | GroupCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type ListActivationCreateWithoutListInput = {
    day: number
    startTime: number
    startBuffer: number
    endTime: number
    endBuffer: number
  }

  export type ListActivationUncheckedCreateWithoutListInput = {
    id?: number
    day: number
    startTime: number
    startBuffer: number
    endTime: number
    endBuffer: number
  }

  export type ListActivationCreateOrConnectWithoutListInput = {
    where: ListActivationWhereUniqueInput
    create: XOR<ListActivationCreateWithoutListInput, ListActivationUncheckedCreateWithoutListInput>
  }

  export type ListActivationCreateManyListInputEnvelope = {
    data: ListActivationCreateManyListInput | ListActivationCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type VisitationCreateWithoutListInput = {
    date: Date | string
    start: number
    end?: number | null
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
    Student: StudentCreateNestedOneWithoutVisitationsInput
  }

  export type VisitationUncheckedCreateWithoutListInput = {
    id?: number
    date: Date | string
    start: number
    end?: number | null
    studentId: number
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
  }

  export type VisitationCreateOrConnectWithoutListInput = {
    where: VisitationWhereUniqueInput
    create: XOR<VisitationCreateWithoutListInput, VisitationUncheckedCreateWithoutListInput>
  }

  export type VisitationCreateManyListInputEnvelope = {
    data: VisitationCreateManyListInput | VisitationCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutListInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    Student: StudentCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutListInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    studentId: number
  }

  export type AttendanceCreateOrConnectWithoutListInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutListInput, AttendanceUncheckedCreateWithoutListInput>
  }

  export type AttendanceCreateManyListInputEnvelope = {
    data: AttendanceCreateManyListInput | AttendanceCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type ExceptionsOnListsCreateWithoutListInput = {
    exception: ExceptionCreateNestedOneWithoutExceptionsOnListsInput
  }

  export type ExceptionsOnListsUncheckedCreateWithoutListInput = {
    exceptionId: number
  }

  export type ExceptionsOnListsCreateOrConnectWithoutListInput = {
    where: ExceptionsOnListsWhereUniqueInput
    create: XOR<ExceptionsOnListsCreateWithoutListInput, ExceptionsOnListsUncheckedCreateWithoutListInput>
  }

  export type ExceptionsOnListsCreateManyListInputEnvelope = {
    data: ExceptionsOnListsCreateManyListInput | ExceptionsOnListsCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type DayNotesCreateWithoutListInput = {
    date: Date | string
    notes: string
  }

  export type DayNotesUncheckedCreateWithoutListInput = {
    id?: number
    date: Date | string
    notes: string
  }

  export type DayNotesCreateOrConnectWithoutListInput = {
    where: DayNotesWhereUniqueInput
    create: XOR<DayNotesCreateWithoutListInput, DayNotesUncheckedCreateWithoutListInput>
  }

  export type DayNotesCreateManyListInputEnvelope = {
    data: DayNotesCreateManyListInput | DayNotesCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutListInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutListInput, GroupUncheckedUpdateWithoutListInput>
    create: XOR<GroupCreateWithoutListInput, GroupUncheckedCreateWithoutListInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutListInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutListInput, GroupUncheckedUpdateWithoutListInput>
  }

  export type GroupUpdateManyWithWhereWithoutListInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutListInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    color?: StringNullableFilter<"Group"> | string | null
    listId?: IntNullableFilter<"Group"> | number | null
    isMainGroup?: BoolFilter<"Group"> | boolean
  }

  export type ListActivationUpsertWithWhereUniqueWithoutListInput = {
    where: ListActivationWhereUniqueInput
    update: XOR<ListActivationUpdateWithoutListInput, ListActivationUncheckedUpdateWithoutListInput>
    create: XOR<ListActivationCreateWithoutListInput, ListActivationUncheckedCreateWithoutListInput>
  }

  export type ListActivationUpdateWithWhereUniqueWithoutListInput = {
    where: ListActivationWhereUniqueInput
    data: XOR<ListActivationUpdateWithoutListInput, ListActivationUncheckedUpdateWithoutListInput>
  }

  export type ListActivationUpdateManyWithWhereWithoutListInput = {
    where: ListActivationScalarWhereInput
    data: XOR<ListActivationUpdateManyMutationInput, ListActivationUncheckedUpdateManyWithoutListInput>
  }

  export type ListActivationScalarWhereInput = {
    AND?: ListActivationScalarWhereInput | ListActivationScalarWhereInput[]
    OR?: ListActivationScalarWhereInput[]
    NOT?: ListActivationScalarWhereInput | ListActivationScalarWhereInput[]
    id?: IntFilter<"ListActivation"> | number
    day?: IntFilter<"ListActivation"> | number
    startTime?: IntFilter<"ListActivation"> | number
    startBuffer?: IntFilter<"ListActivation"> | number
    endTime?: IntFilter<"ListActivation"> | number
    endBuffer?: IntFilter<"ListActivation"> | number
    listId?: IntNullableFilter<"ListActivation"> | number | null
  }

  export type VisitationUpsertWithWhereUniqueWithoutListInput = {
    where: VisitationWhereUniqueInput
    update: XOR<VisitationUpdateWithoutListInput, VisitationUncheckedUpdateWithoutListInput>
    create: XOR<VisitationCreateWithoutListInput, VisitationUncheckedCreateWithoutListInput>
  }

  export type VisitationUpdateWithWhereUniqueWithoutListInput = {
    where: VisitationWhereUniqueInput
    data: XOR<VisitationUpdateWithoutListInput, VisitationUncheckedUpdateWithoutListInput>
  }

  export type VisitationUpdateManyWithWhereWithoutListInput = {
    where: VisitationScalarWhereInput
    data: XOR<VisitationUpdateManyMutationInput, VisitationUncheckedUpdateManyWithoutListInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutListInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutListInput, AttendanceUncheckedUpdateWithoutListInput>
    create: XOR<AttendanceCreateWithoutListInput, AttendanceUncheckedCreateWithoutListInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutListInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutListInput, AttendanceUncheckedUpdateWithoutListInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutListInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutListInput>
  }

  export type ExceptionsOnListsUpsertWithWhereUniqueWithoutListInput = {
    where: ExceptionsOnListsWhereUniqueInput
    update: XOR<ExceptionsOnListsUpdateWithoutListInput, ExceptionsOnListsUncheckedUpdateWithoutListInput>
    create: XOR<ExceptionsOnListsCreateWithoutListInput, ExceptionsOnListsUncheckedCreateWithoutListInput>
  }

  export type ExceptionsOnListsUpdateWithWhereUniqueWithoutListInput = {
    where: ExceptionsOnListsWhereUniqueInput
    data: XOR<ExceptionsOnListsUpdateWithoutListInput, ExceptionsOnListsUncheckedUpdateWithoutListInput>
  }

  export type ExceptionsOnListsUpdateManyWithWhereWithoutListInput = {
    where: ExceptionsOnListsScalarWhereInput
    data: XOR<ExceptionsOnListsUpdateManyMutationInput, ExceptionsOnListsUncheckedUpdateManyWithoutListInput>
  }

  export type ExceptionsOnListsScalarWhereInput = {
    AND?: ExceptionsOnListsScalarWhereInput | ExceptionsOnListsScalarWhereInput[]
    OR?: ExceptionsOnListsScalarWhereInput[]
    NOT?: ExceptionsOnListsScalarWhereInput | ExceptionsOnListsScalarWhereInput[]
    exceptionId?: IntFilter<"ExceptionsOnLists"> | number
    listId?: IntFilter<"ExceptionsOnLists"> | number
  }

  export type DayNotesUpsertWithWhereUniqueWithoutListInput = {
    where: DayNotesWhereUniqueInput
    update: XOR<DayNotesUpdateWithoutListInput, DayNotesUncheckedUpdateWithoutListInput>
    create: XOR<DayNotesCreateWithoutListInput, DayNotesUncheckedCreateWithoutListInput>
  }

  export type DayNotesUpdateWithWhereUniqueWithoutListInput = {
    where: DayNotesWhereUniqueInput
    data: XOR<DayNotesUpdateWithoutListInput, DayNotesUncheckedUpdateWithoutListInput>
  }

  export type DayNotesUpdateManyWithWhereWithoutListInput = {
    where: DayNotesScalarWhereInput
    data: XOR<DayNotesUpdateManyMutationInput, DayNotesUncheckedUpdateManyWithoutListInput>
  }

  export type DayNotesScalarWhereInput = {
    AND?: DayNotesScalarWhereInput | DayNotesScalarWhereInput[]
    OR?: DayNotesScalarWhereInput[]
    NOT?: DayNotesScalarWhereInput | DayNotesScalarWhereInput[]
    id?: IntFilter<"DayNotes"> | number
    date?: DateTimeFilter<"DayNotes"> | Date | string
    listId?: IntFilter<"DayNotes"> | number
    notes?: StringFilter<"DayNotes"> | string
  }

  export type ListCreateWithoutDayNotesInput = {
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupCreateNestedManyWithoutListInput
    activations?: ListActivationCreateNestedManyWithoutListInput
    Visitation?: VisitationCreateNestedManyWithoutListInput
    Attendance?: AttendanceCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutDayNotesInput = {
    id?: number
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupUncheckedCreateNestedManyWithoutListInput
    activations?: ListActivationUncheckedCreateNestedManyWithoutListInput
    Visitation?: VisitationUncheckedCreateNestedManyWithoutListInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutDayNotesInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutDayNotesInput, ListUncheckedCreateWithoutDayNotesInput>
  }

  export type ListUpsertWithoutDayNotesInput = {
    update: XOR<ListUpdateWithoutDayNotesInput, ListUncheckedUpdateWithoutDayNotesInput>
    create: XOR<ListCreateWithoutDayNotesInput, ListUncheckedCreateWithoutDayNotesInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutDayNotesInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutDayNotesInput, ListUncheckedUpdateWithoutDayNotesInput>
  }

  export type ListUpdateWithoutDayNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUpdateManyWithoutListNestedInput
    activations?: ListActivationUpdateManyWithoutListNestedInput
    Visitation?: VisitationUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutDayNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUncheckedUpdateManyWithoutListNestedInput
    activations?: ListActivationUncheckedUpdateManyWithoutListNestedInput
    Visitation?: VisitationUncheckedUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateWithoutActivationsInput = {
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupCreateNestedManyWithoutListInput
    Visitation?: VisitationCreateNestedManyWithoutListInput
    Attendance?: AttendanceCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutListInput
    DayNotes?: DayNotesCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutActivationsInput = {
    id?: number
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupUncheckedCreateNestedManyWithoutListInput
    Visitation?: VisitationUncheckedCreateNestedManyWithoutListInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutListInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutListInput
    DayNotes?: DayNotesUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutActivationsInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutActivationsInput, ListUncheckedCreateWithoutActivationsInput>
  }

  export type ListUpsertWithoutActivationsInput = {
    update: XOR<ListUpdateWithoutActivationsInput, ListUncheckedUpdateWithoutActivationsInput>
    create: XOR<ListCreateWithoutActivationsInput, ListUncheckedCreateWithoutActivationsInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutActivationsInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutActivationsInput, ListUncheckedUpdateWithoutActivationsInput>
  }

  export type ListUpdateWithoutActivationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUpdateManyWithoutListNestedInput
    Visitation?: VisitationUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutActivationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUncheckedUpdateManyWithoutListNestedInput
    Visitation?: VisitationUncheckedUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutListNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUncheckedUpdateManyWithoutListNestedInput
  }

  export type ExceptionCreateWithoutExceptionsOnListsInput = {
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
    SpecificDates?: SpecificDateCreateNestedManyWithoutExceptionInput
    Student: StudentCreateNestedOneWithoutExceptionInput
  }

  export type ExceptionUncheckedCreateWithoutExceptionsOnListsInput = {
    id?: number
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    studentId: number
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
    SpecificDates?: SpecificDateUncheckedCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionCreateOrConnectWithoutExceptionsOnListsInput = {
    where: ExceptionWhereUniqueInput
    create: XOR<ExceptionCreateWithoutExceptionsOnListsInput, ExceptionUncheckedCreateWithoutExceptionsOnListsInput>
  }

  export type ListCreateWithoutExceptionsOnListsInput = {
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupCreateNestedManyWithoutListInput
    activations?: ListActivationCreateNestedManyWithoutListInput
    Visitation?: VisitationCreateNestedManyWithoutListInput
    Attendance?: AttendanceCreateNestedManyWithoutListInput
    DayNotes?: DayNotesCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutExceptionsOnListsInput = {
    id?: number
    name: string
    isMainList?: boolean
    recordTime: $Enums.RecordTime
    manageTime?: $Enums.TimeManagement
    studentName: boolean
    className: boolean
    time: boolean
    notes: $Enums.ListStudentNotes
    groupColor: boolean
    Group?: GroupUncheckedCreateNestedManyWithoutListInput
    activations?: ListActivationUncheckedCreateNestedManyWithoutListInput
    Visitation?: VisitationUncheckedCreateNestedManyWithoutListInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutListInput
    DayNotes?: DayNotesUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutExceptionsOnListsInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutExceptionsOnListsInput, ListUncheckedCreateWithoutExceptionsOnListsInput>
  }

  export type ExceptionUpsertWithoutExceptionsOnListsInput = {
    update: XOR<ExceptionUpdateWithoutExceptionsOnListsInput, ExceptionUncheckedUpdateWithoutExceptionsOnListsInput>
    create: XOR<ExceptionCreateWithoutExceptionsOnListsInput, ExceptionUncheckedCreateWithoutExceptionsOnListsInput>
    where?: ExceptionWhereInput
  }

  export type ExceptionUpdateToOneWithWhereWithoutExceptionsOnListsInput = {
    where?: ExceptionWhereInput
    data: XOR<ExceptionUpdateWithoutExceptionsOnListsInput, ExceptionUncheckedUpdateWithoutExceptionsOnListsInput>
  }

  export type ExceptionUpdateWithoutExceptionsOnListsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    SpecificDates?: SpecificDateUpdateManyWithoutExceptionNestedInput
    Student?: StudentUpdateOneRequiredWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateWithoutExceptionsOnListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    SpecificDates?: SpecificDateUncheckedUpdateManyWithoutExceptionNestedInput
  }

  export type ListUpsertWithoutExceptionsOnListsInput = {
    update: XOR<ListUpdateWithoutExceptionsOnListsInput, ListUncheckedUpdateWithoutExceptionsOnListsInput>
    create: XOR<ListCreateWithoutExceptionsOnListsInput, ListUncheckedCreateWithoutExceptionsOnListsInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutExceptionsOnListsInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutExceptionsOnListsInput, ListUncheckedUpdateWithoutExceptionsOnListsInput>
  }

  export type ListUpdateWithoutExceptionsOnListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUpdateManyWithoutListNestedInput
    activations?: ListActivationUpdateManyWithoutListNestedInput
    Visitation?: VisitationUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutExceptionsOnListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isMainList?: BoolFieldUpdateOperationsInput | boolean
    recordTime?: EnumRecordTimeFieldUpdateOperationsInput | $Enums.RecordTime
    manageTime?: EnumTimeManagementFieldUpdateOperationsInput | $Enums.TimeManagement
    studentName?: BoolFieldUpdateOperationsInput | boolean
    className?: BoolFieldUpdateOperationsInput | boolean
    time?: BoolFieldUpdateOperationsInput | boolean
    notes?: EnumListStudentNotesFieldUpdateOperationsInput | $Enums.ListStudentNotes
    groupColor?: BoolFieldUpdateOperationsInput | boolean
    Group?: GroupUncheckedUpdateManyWithoutListNestedInput
    activations?: ListActivationUncheckedUpdateManyWithoutListNestedInput
    Visitation?: VisitationUncheckedUpdateManyWithoutListNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutListNestedInput
    DayNotes?: DayNotesUncheckedUpdateManyWithoutListNestedInput
  }

  export type SpecificDateCreateWithoutExceptionInput = {
    date: Date | string
  }

  export type SpecificDateUncheckedCreateWithoutExceptionInput = {
    id?: number
    date: Date | string
  }

  export type SpecificDateCreateOrConnectWithoutExceptionInput = {
    where: SpecificDateWhereUniqueInput
    create: XOR<SpecificDateCreateWithoutExceptionInput, SpecificDateUncheckedCreateWithoutExceptionInput>
  }

  export type SpecificDateCreateManyExceptionInputEnvelope = {
    data: SpecificDateCreateManyExceptionInput | SpecificDateCreateManyExceptionInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutExceptionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    visitations?: VisitationCreateNestedManyWithoutStudentInput
    GroupsOnStudents?: GroupsOnStudentsCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutExceptionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    notes?: string | null
    grade: number
    className: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    visitations?: VisitationUncheckedCreateNestedManyWithoutStudentInput
    GroupsOnStudents?: GroupsOnStudentsUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutExceptionInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutExceptionInput, StudentUncheckedCreateWithoutExceptionInput>
  }

  export type ExceptionsOnListsCreateWithoutExceptionInput = {
    list: ListCreateNestedOneWithoutExceptionsOnListsInput
  }

  export type ExceptionsOnListsUncheckedCreateWithoutExceptionInput = {
    listId: number
  }

  export type ExceptionsOnListsCreateOrConnectWithoutExceptionInput = {
    where: ExceptionsOnListsWhereUniqueInput
    create: XOR<ExceptionsOnListsCreateWithoutExceptionInput, ExceptionsOnListsUncheckedCreateWithoutExceptionInput>
  }

  export type ExceptionsOnListsCreateManyExceptionInputEnvelope = {
    data: ExceptionsOnListsCreateManyExceptionInput | ExceptionsOnListsCreateManyExceptionInput[]
    skipDuplicates?: boolean
  }

  export type SpecificDateUpsertWithWhereUniqueWithoutExceptionInput = {
    where: SpecificDateWhereUniqueInput
    update: XOR<SpecificDateUpdateWithoutExceptionInput, SpecificDateUncheckedUpdateWithoutExceptionInput>
    create: XOR<SpecificDateCreateWithoutExceptionInput, SpecificDateUncheckedCreateWithoutExceptionInput>
  }

  export type SpecificDateUpdateWithWhereUniqueWithoutExceptionInput = {
    where: SpecificDateWhereUniqueInput
    data: XOR<SpecificDateUpdateWithoutExceptionInput, SpecificDateUncheckedUpdateWithoutExceptionInput>
  }

  export type SpecificDateUpdateManyWithWhereWithoutExceptionInput = {
    where: SpecificDateScalarWhereInput
    data: XOR<SpecificDateUpdateManyMutationInput, SpecificDateUncheckedUpdateManyWithoutExceptionInput>
  }

  export type SpecificDateScalarWhereInput = {
    AND?: SpecificDateScalarWhereInput | SpecificDateScalarWhereInput[]
    OR?: SpecificDateScalarWhereInput[]
    NOT?: SpecificDateScalarWhereInput | SpecificDateScalarWhereInput[]
    id?: IntFilter<"SpecificDate"> | number
    exceptionId?: IntFilter<"SpecificDate"> | number
    date?: DateTimeFilter<"SpecificDate"> | Date | string
  }

  export type StudentUpsertWithoutExceptionInput = {
    update: XOR<StudentUpdateWithoutExceptionInput, StudentUncheckedUpdateWithoutExceptionInput>
    create: XOR<StudentCreateWithoutExceptionInput, StudentUncheckedCreateWithoutExceptionInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutExceptionInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutExceptionInput, StudentUncheckedUpdateWithoutExceptionInput>
  }

  export type StudentUpdateWithoutExceptionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    visitations?: VisitationUpdateManyWithoutStudentNestedInput
    GroupsOnStudents?: GroupsOnStudentsUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutExceptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    visitations?: VisitationUncheckedUpdateManyWithoutStudentNestedInput
    GroupsOnStudents?: GroupsOnStudentsUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ExceptionsOnListsUpsertWithWhereUniqueWithoutExceptionInput = {
    where: ExceptionsOnListsWhereUniqueInput
    update: XOR<ExceptionsOnListsUpdateWithoutExceptionInput, ExceptionsOnListsUncheckedUpdateWithoutExceptionInput>
    create: XOR<ExceptionsOnListsCreateWithoutExceptionInput, ExceptionsOnListsUncheckedCreateWithoutExceptionInput>
  }

  export type ExceptionsOnListsUpdateWithWhereUniqueWithoutExceptionInput = {
    where: ExceptionsOnListsWhereUniqueInput
    data: XOR<ExceptionsOnListsUpdateWithoutExceptionInput, ExceptionsOnListsUncheckedUpdateWithoutExceptionInput>
  }

  export type ExceptionsOnListsUpdateManyWithWhereWithoutExceptionInput = {
    where: ExceptionsOnListsScalarWhereInput
    data: XOR<ExceptionsOnListsUpdateManyMutationInput, ExceptionsOnListsUncheckedUpdateManyWithoutExceptionInput>
  }

  export type ExceptionCreateWithoutSpecificDatesInput = {
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
    Student: StudentCreateNestedOneWithoutExceptionInput
    ExceptionsOnLists?: ExceptionsOnListsCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionUncheckedCreateWithoutSpecificDatesInput = {
    id?: number
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    studentId: number
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
    ExceptionsOnLists?: ExceptionsOnListsUncheckedCreateNestedManyWithoutExceptionInput
  }

  export type ExceptionCreateOrConnectWithoutSpecificDatesInput = {
    where: ExceptionWhereUniqueInput
    create: XOR<ExceptionCreateWithoutSpecificDatesInput, ExceptionUncheckedCreateWithoutSpecificDatesInput>
  }

  export type ExceptionUpsertWithoutSpecificDatesInput = {
    update: XOR<ExceptionUpdateWithoutSpecificDatesInput, ExceptionUncheckedUpdateWithoutSpecificDatesInput>
    create: XOR<ExceptionCreateWithoutSpecificDatesInput, ExceptionUncheckedCreateWithoutSpecificDatesInput>
    where?: ExceptionWhereInput
  }

  export type ExceptionUpdateToOneWithWhereWithoutSpecificDatesInput = {
    where?: ExceptionWhereInput
    data: XOR<ExceptionUpdateWithoutSpecificDatesInput, ExceptionUncheckedUpdateWithoutSpecificDatesInput>
  }

  export type ExceptionUpdateWithoutSpecificDatesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    Student?: StudentUpdateOneRequiredWithoutExceptionNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateWithoutSpecificDatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutExceptionNestedInput
  }

  export type AttendanceCreateManyStudentInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    listId: number
  }

  export type VisitationCreateManyStudentInput = {
    id?: number
    date: Date | string
    start: number
    end?: number | null
    listId: number
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
  }

  export type GroupsOnStudentsCreateManyStudentInput = {
    groupId: number
  }

  export type ExceptionCreateManyStudentInput = {
    id?: number
    createdAt?: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    presence: $Enums.ExceptionPresence
    end?: number | null
    notes?: string | null
  }

  export type AttendanceUpdateWithoutStudentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    List?: ListUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitationUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
    List?: ListUpdateOneRequiredWithoutVisitationNestedInput
  }

  export type VisitationUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    listId?: IntFieldUpdateOperationsInput | number
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type VisitationUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    listId?: IntFieldUpdateOperationsInput | number
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GroupsOnStudentsUpdateWithoutStudentInput = {
    group?: GroupUpdateOneRequiredWithoutGroupsOnStudentsNestedInput
  }

  export type GroupsOnStudentsUncheckedUpdateWithoutStudentInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupsOnStudentsUncheckedUpdateManyWithoutStudentInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type ExceptionUpdateWithoutStudentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    SpecificDates?: SpecificDateUpdateManyWithoutExceptionNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    SpecificDates?: SpecificDateUncheckedUpdateManyWithoutExceptionNestedInput
    ExceptionsOnLists?: ExceptionsOnListsUncheckedUpdateManyWithoutExceptionNestedInput
  }

  export type ExceptionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presence?: EnumExceptionPresenceFieldUpdateOperationsInput | $Enums.ExceptionPresence
    end?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupsOnStudentsCreateManyGroupInput = {
    studentId: number
  }

  export type GroupsOnStudentsUpdateWithoutGroupInput = {
    student?: StudentUpdateOneRequiredWithoutGroupsOnStudentsNestedInput
  }

  export type GroupsOnStudentsUncheckedUpdateWithoutGroupInput = {
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupsOnStudentsUncheckedUpdateManyWithoutGroupInput = {
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupCreateManyListInput = {
    id?: number
    name: string
    color?: string | null
    isMainGroup?: boolean
  }

  export type ListActivationCreateManyListInput = {
    id?: number
    day: number
    startTime: number
    startBuffer: number
    endTime: number
    endBuffer: number
  }

  export type VisitationCreateManyListInput = {
    id?: number
    date: Date | string
    start: number
    end?: number | null
    studentId: number
    startNotes?: string | null
    endNotes?: string | null
    hasHomework?: boolean | null
  }

  export type AttendanceCreateManyListInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    day: number
    end: number
    status?: $Enums.AttendanceStatus
    studentId: number
  }

  export type ExceptionsOnListsCreateManyListInput = {
    exceptionId: number
  }

  export type DayNotesCreateManyListInput = {
    id?: number
    date: Date | string
    notes: string
  }

  export type GroupUpdateWithoutListInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
    GroupsOnStudents?: GroupsOnStudentsUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
    GroupsOnStudents?: GroupsOnStudentsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isMainGroup?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ListActivationUpdateWithoutListInput = {
    day?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    startBuffer?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    endBuffer?: IntFieldUpdateOperationsInput | number
  }

  export type ListActivationUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    startBuffer?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    endBuffer?: IntFieldUpdateOperationsInput | number
  }

  export type ListActivationUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    startBuffer?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    endBuffer?: IntFieldUpdateOperationsInput | number
  }

  export type VisitationUpdateWithoutListInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Student?: StudentUpdateOneRequiredWithoutVisitationsNestedInput
  }

  export type VisitationUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type VisitationUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    startNotes?: NullableStringFieldUpdateOperationsInput | string | null
    endNotes?: NullableStringFieldUpdateOperationsInput | string | null
    hasHomework?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AttendanceUpdateWithoutListInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    Student?: StudentUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: IntFieldUpdateOperationsInput | number
    end?: IntFieldUpdateOperationsInput | number
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type ExceptionsOnListsUpdateWithoutListInput = {
    exception?: ExceptionUpdateOneRequiredWithoutExceptionsOnListsNestedInput
  }

  export type ExceptionsOnListsUncheckedUpdateWithoutListInput = {
    exceptionId?: IntFieldUpdateOperationsInput | number
  }

  export type ExceptionsOnListsUncheckedUpdateManyWithoutListInput = {
    exceptionId?: IntFieldUpdateOperationsInput | number
  }

  export type DayNotesUpdateWithoutListInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type DayNotesUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type DayNotesUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type SpecificDateCreateManyExceptionInput = {
    id?: number
    date: Date | string
  }

  export type ExceptionsOnListsCreateManyExceptionInput = {
    listId: number
  }

  export type SpecificDateUpdateWithoutExceptionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecificDateUncheckedUpdateWithoutExceptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecificDateUncheckedUpdateManyWithoutExceptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExceptionsOnListsUpdateWithoutExceptionInput = {
    list?: ListUpdateOneRequiredWithoutExceptionsOnListsNestedInput
  }

  export type ExceptionsOnListsUncheckedUpdateWithoutExceptionInput = {
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type ExceptionsOnListsUncheckedUpdateManyWithoutExceptionInput = {
    listId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListCountOutputTypeDefaultArgs instead
     */
    export type ListCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExceptionCountOutputTypeDefaultArgs instead
     */
    export type ExceptionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExceptionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisitationDefaultArgs instead
     */
    export type VisitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisitationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupsOnStudentsDefaultArgs instead
     */
    export type GroupsOnStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupsOnStudentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListDefaultArgs instead
     */
    export type ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DayNotesDefaultArgs instead
     */
    export type DayNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DayNotesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListActivationDefaultArgs instead
     */
    export type ListActivationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListActivationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExceptionsOnListsDefaultArgs instead
     */
    export type ExceptionsOnListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExceptionsOnListsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExceptionDefaultArgs instead
     */
    export type ExceptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExceptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecificDateDefaultArgs instead
     */
    export type SpecificDateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecificDateDefaultArgs<ExtArgs>

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