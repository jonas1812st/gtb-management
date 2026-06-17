
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.1",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  firstName: 'firstName',
  lastName: 'lastName',
  notes: 'notes',
  grade: 'grade',
  className: 'className'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  day: 'day',
  end: 'end',
  status: 'status',
  studentId: 'studentId',
  listId: 'listId'
};

exports.Prisma.VisitationScalarFieldEnum = {
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  role: 'role',
  username: 'username',
  password: 'password'
};

exports.Prisma.GroupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  listId: 'listId',
  isMainGroup: 'isMainGroup'
};

exports.Prisma.GroupsOnStudentsScalarFieldEnum = {
  studentId: 'studentId',
  groupId: 'groupId'
};

exports.Prisma.ListScalarFieldEnum = {
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

exports.Prisma.DayNotesScalarFieldEnum = {
  id: 'id',
  date: 'date',
  listId: 'listId',
  notes: 'notes'
};

exports.Prisma.ListActivationScalarFieldEnum = {
  id: 'id',
  day: 'day',
  startTime: 'startTime',
  startBuffer: 'startBuffer',
  endTime: 'endTime',
  endBuffer: 'endBuffer',
  listId: 'listId'
};

exports.Prisma.ExceptionsOnListsScalarFieldEnum = {
  exceptionId: 'exceptionId',
  listId: 'listId'
};

exports.Prisma.ExceptionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  startDate: 'startDate',
  endDate: 'endDate',
  studentId: 'studentId',
  presence: 'presence',
  end: 'end',
  notes: 'notes'
};

exports.Prisma.SpecificDateScalarFieldEnum = {
  id: 'id',
  exceptionId: 'exceptionId',
  date: 'date'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.AttendanceStatus = exports.$Enums.AttendanceStatus = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT'
};

exports.Role = exports.$Enums.Role = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  DEFAULT: 'DEFAULT'
};

exports.RecordTime = exports.$Enums.RecordTime = {
  START: 'START',
  START_END: 'START_END'
};

exports.TimeManagement = exports.$Enums.TimeManagement = {
  LIST: 'LIST',
  STUDENT: 'STUDENT'
};

exports.ListStudentNotes = exports.$Enums.ListStudentNotes = {
  NONE: 'NONE',
  MARKED: 'MARKED',
  SHORTENED: 'SHORTENED',
  FULL: 'FULL'
};

exports.ExceptionPresence = exports.$Enums.ExceptionPresence = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
