import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const StudentScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','firstName','lastName','notes','grade','className']);

export const AttendanceScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','day','end','studentId']);

export const VisitationScalarFieldEnumSchema = z.enum(['id','date','start','end','studentId']);

export const UserScalarFieldEnumSchema = z.enum(['id','username','password']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// STUDENT SCHEMA
/////////////////////////////////////////

export const StudentSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().nullable(),
  grade: z.number().int(),
  className: z.string(),
})

export type Student = z.infer<typeof StudentSchema>

/////////////////////////////////////////
// ATTENDANCE SCHEMA
/////////////////////////////////////////

export const AttendanceSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  day: z.number().int(),
  end: z.number().int(),
  studentId: z.number().int().nullable(),
})

export type Attendance = z.infer<typeof AttendanceSchema>

/////////////////////////////////////////
// VISITATION SCHEMA
/////////////////////////////////////////

export const VisitationSchema = z.object({
  id: z.number().int(),
  date: z.coerce.date(),
  start: z.number().int(),
  end: z.number().int().nullable(),
  studentId: z.number().int().nullable(),
})

export type Visitation = z.infer<typeof VisitationSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  username: z.string(),
  password: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// STUDENT
//------------------------------------------------------

export const StudentIncludeSchema: z.ZodType<Prisma.StudentInclude> = z.object({
  attendances: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  visitations: z.union([z.boolean(),z.lazy(() => VisitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StudentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StudentArgsSchema: z.ZodType<Prisma.StudentDefaultArgs> = z.object({
  select: z.lazy(() => StudentSelectSchema).optional(),
  include: z.lazy(() => StudentIncludeSchema).optional(),
}).strict();

export const StudentCountOutputTypeArgsSchema: z.ZodType<Prisma.StudentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => StudentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const StudentCountOutputTypeSelectSchema: z.ZodType<Prisma.StudentCountOutputTypeSelect> = z.object({
  attendances: z.boolean().optional(),
  visitations: z.boolean().optional(),
}).strict();

export const StudentSelectSchema: z.ZodType<Prisma.StudentSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  notes: z.boolean().optional(),
  grade: z.boolean().optional(),
  className: z.boolean().optional(),
  attendances: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  visitations: z.union([z.boolean(),z.lazy(() => VisitationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StudentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ATTENDANCE
//------------------------------------------------------

export const AttendanceIncludeSchema: z.ZodType<Prisma.AttendanceInclude> = z.object({
  Student: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
}).strict()

export const AttendanceArgsSchema: z.ZodType<Prisma.AttendanceDefaultArgs> = z.object({
  select: z.lazy(() => AttendanceSelectSchema).optional(),
  include: z.lazy(() => AttendanceIncludeSchema).optional(),
}).strict();

export const AttendanceSelectSchema: z.ZodType<Prisma.AttendanceSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  day: z.boolean().optional(),
  end: z.boolean().optional(),
  studentId: z.boolean().optional(),
  Student: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
}).strict()

// VISITATION
//------------------------------------------------------

export const VisitationIncludeSchema: z.ZodType<Prisma.VisitationInclude> = z.object({
  Student: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
}).strict()

export const VisitationArgsSchema: z.ZodType<Prisma.VisitationDefaultArgs> = z.object({
  select: z.lazy(() => VisitationSelectSchema).optional(),
  include: z.lazy(() => VisitationIncludeSchema).optional(),
}).strict();

export const VisitationSelectSchema: z.ZodType<Prisma.VisitationSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  studentId: z.boolean().optional(),
  Student: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const StudentWhereInputSchema: z.ZodType<Prisma.StudentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  grade: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  className: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attendances: z.lazy(() => AttendanceListRelationFilterSchema).optional(),
  visitations: z.lazy(() => VisitationListRelationFilterSchema).optional()
}).strict() as z.ZodType<Prisma.StudentWhereInput>;

export const StudentOrderByWithRelationInputSchema: z.ZodType<Prisma.StudentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  className: z.lazy(() => SortOrderSchema).optional(),
  attendances: z.lazy(() => AttendanceOrderByRelationAggregateInputSchema).optional(),
  visitations: z.lazy(() => VisitationOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentOrderByWithRelationInput>;

export const StudentWhereUniqueInputSchema: z.ZodType<Prisma.StudentWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  grade: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  className: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attendances: z.lazy(() => AttendanceListRelationFilterSchema).optional(),
  visitations: z.lazy(() => VisitationListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.StudentWhereUniqueInput>;

export const StudentOrderByWithAggregationInputSchema: z.ZodType<Prisma.StudentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  className: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StudentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StudentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StudentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StudentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StudentSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentOrderByWithAggregationInput>;

export const StudentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StudentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StudentScalarWhereWithAggregatesInputSchema),z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentScalarWhereWithAggregatesInputSchema),z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  firstName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  grade: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  className: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict() as z.ZodType<Prisma.StudentScalarWhereWithAggregatesInput>;

export const AttendanceWhereInputSchema: z.ZodType<Prisma.AttendanceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AttendanceWhereInputSchema),z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceWhereInputSchema),z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  day: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  end: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  studentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  Student: z.union([ z.lazy(() => StudentNullableRelationFilterSchema),z.lazy(() => StudentWhereInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.AttendanceWhereInput>;

export const AttendanceOrderByWithRelationInputSchema: z.ZodType<Prisma.AttendanceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Student: z.lazy(() => StudentOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceOrderByWithRelationInput>;

export const AttendanceWhereUniqueInputSchema: z.ZodType<Prisma.AttendanceWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => AttendanceWhereInputSchema),z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceWhereInputSchema),z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  day: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  end: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  studentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  Student: z.union([ z.lazy(() => StudentNullableRelationFilterSchema),z.lazy(() => StudentWhereInputSchema) ]).optional().nullable(),
}).strict()) as z.ZodType<Prisma.AttendanceWhereUniqueInput>;

export const AttendanceOrderByWithAggregationInputSchema: z.ZodType<Prisma.AttendanceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AttendanceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AttendanceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AttendanceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AttendanceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AttendanceSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceOrderByWithAggregationInput>;

export const AttendanceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AttendanceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema),z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema),z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  day: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  end: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  studentId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.AttendanceScalarWhereWithAggregatesInput>;

export const VisitationWhereInputSchema: z.ZodType<Prisma.VisitationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VisitationWhereInputSchema),z.lazy(() => VisitationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisitationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisitationWhereInputSchema),z.lazy(() => VisitationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  start: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  end: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  studentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  Student: z.union([ z.lazy(() => StudentNullableRelationFilterSchema),z.lazy(() => StudentWhereInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationWhereInput>;

export const VisitationOrderByWithRelationInputSchema: z.ZodType<Prisma.VisitationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  studentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Student: z.lazy(() => StudentOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationOrderByWithRelationInput>;

export const VisitationWhereUniqueInputSchema: z.ZodType<Prisma.VisitationWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    date: z.coerce.date()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    date: z.coerce.date(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  date: z.coerce.date().optional(),
  AND: z.union([ z.lazy(() => VisitationWhereInputSchema),z.lazy(() => VisitationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisitationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisitationWhereInputSchema),z.lazy(() => VisitationWhereInputSchema).array() ]).optional(),
  start: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  end: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  studentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  Student: z.union([ z.lazy(() => StudentNullableRelationFilterSchema),z.lazy(() => StudentWhereInputSchema) ]).optional().nullable(),
}).strict()) as z.ZodType<Prisma.VisitationWhereUniqueInput>;

export const VisitationOrderByWithAggregationInputSchema: z.ZodType<Prisma.VisitationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  studentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => VisitationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VisitationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VisitationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VisitationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VisitationSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationOrderByWithAggregationInput>;

export const VisitationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VisitationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VisitationScalarWhereWithAggregatesInputSchema),z.lazy(() => VisitationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisitationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisitationScalarWhereWithAggregatesInputSchema),z.lazy(() => VisitationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  start: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  end: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  studentId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationScalarWhereWithAggregatesInput>;

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict() as z.ZodType<Prisma.UserWhereInput>;

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserOrderByWithRelationInput>;

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    username: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict()) as z.ZodType<Prisma.UserWhereUniqueInput>;

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserOrderByWithAggregationInput>;

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict() as z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;

export const StudentCreateInputSchema: z.ZodType<Prisma.StudentCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().optional().nullable(),
  grade: z.number().int(),
  className: z.string(),
  attendances: z.lazy(() => AttendanceCreateNestedManyWithoutStudentInputSchema).optional(),
  visitations: z.lazy(() => VisitationCreateNestedManyWithoutStudentInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentCreateInput>;

export const StudentUncheckedCreateInputSchema: z.ZodType<Prisma.StudentUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().optional().nullable(),
  grade: z.number().int(),
  className: z.string(),
  attendances: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutStudentInputSchema).optional(),
  visitations: z.lazy(() => VisitationUncheckedCreateNestedManyWithoutStudentInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUncheckedCreateInput>;

export const StudentUpdateInputSchema: z.ZodType<Prisma.StudentUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  className: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attendances: z.lazy(() => AttendanceUpdateManyWithoutStudentNestedInputSchema).optional(),
  visitations: z.lazy(() => VisitationUpdateManyWithoutStudentNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUpdateInput>;

export const StudentUncheckedUpdateInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  className: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attendances: z.lazy(() => AttendanceUncheckedUpdateManyWithoutStudentNestedInputSchema).optional(),
  visitations: z.lazy(() => VisitationUncheckedUpdateManyWithoutStudentNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUncheckedUpdateInput>;

export const StudentCreateManyInputSchema: z.ZodType<Prisma.StudentCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().optional().nullable(),
  grade: z.number().int(),
  className: z.string()
}).strict() as z.ZodType<Prisma.StudentCreateManyInput>;

export const StudentUpdateManyMutationInputSchema: z.ZodType<Prisma.StudentUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  className: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.StudentUpdateManyMutationInput>;

export const StudentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  className: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.StudentUncheckedUpdateManyInput>;

export const AttendanceCreateInputSchema: z.ZodType<Prisma.AttendanceCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  day: z.number().int(),
  end: z.number().int(),
  Student: z.lazy(() => StudentCreateNestedOneWithoutAttendancesInputSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceCreateInput>;

export const AttendanceUncheckedCreateInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  day: z.number().int(),
  end: z.number().int(),
  studentId: z.number().int().optional().nullable()
}).strict() as z.ZodType<Prisma.AttendanceUncheckedCreateInput>;

export const AttendanceUpdateInputSchema: z.ZodType<Prisma.AttendanceUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  day: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Student: z.lazy(() => StudentUpdateOneWithoutAttendancesNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceUpdateInput>;

export const AttendanceUncheckedUpdateInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  day: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  studentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.AttendanceUncheckedUpdateInput>;

export const AttendanceCreateManyInputSchema: z.ZodType<Prisma.AttendanceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  day: z.number().int(),
  end: z.number().int(),
  studentId: z.number().int().optional().nullable()
}).strict() as z.ZodType<Prisma.AttendanceCreateManyInput>;

export const AttendanceUpdateManyMutationInputSchema: z.ZodType<Prisma.AttendanceUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  day: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceUpdateManyMutationInput>;

export const AttendanceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  day: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  studentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.AttendanceUncheckedUpdateManyInput>;

export const VisitationCreateInputSchema: z.ZodType<Prisma.VisitationCreateInput> = z.object({
  date: z.coerce.date(),
  start: z.number().int(),
  end: z.number().int().optional().nullable(),
  Student: z.lazy(() => StudentCreateNestedOneWithoutVisitationsInputSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationCreateInput>;

export const VisitationUncheckedCreateInputSchema: z.ZodType<Prisma.VisitationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  start: z.number().int(),
  end: z.number().int().optional().nullable(),
  studentId: z.number().int().optional().nullable()
}).strict() as z.ZodType<Prisma.VisitationUncheckedCreateInput>;

export const VisitationUpdateInputSchema: z.ZodType<Prisma.VisitationUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  start: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Student: z.lazy(() => StudentUpdateOneWithoutVisitationsNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationUpdateInput>;

export const VisitationUncheckedUpdateInputSchema: z.ZodType<Prisma.VisitationUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  start: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  studentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationUncheckedUpdateInput>;

export const VisitationCreateManyInputSchema: z.ZodType<Prisma.VisitationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  start: z.number().int(),
  end: z.number().int().optional().nullable(),
  studentId: z.number().int().optional().nullable()
}).strict() as z.ZodType<Prisma.VisitationCreateManyInput>;

export const VisitationUpdateManyMutationInputSchema: z.ZodType<Prisma.VisitationUpdateManyMutationInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  start: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationUpdateManyMutationInput>;

export const VisitationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VisitationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  start: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  studentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationUncheckedUpdateManyInput>;

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  username: z.string(),
  password: z.string()
}).strict() as z.ZodType<Prisma.UserCreateInput>;

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  username: z.string(),
  password: z.string()
}).strict() as z.ZodType<Prisma.UserUncheckedCreateInput>;

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUpdateInput>;

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUncheckedUpdateInput>;

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.number().int().optional(),
  username: z.string(),
  password: z.string()
}).strict() as z.ZodType<Prisma.UserCreateManyInput>;

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUpdateManyMutationInput>;

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUncheckedUpdateManyInput>;

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.IntFilter>;

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.DateTimeFilter>;

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.StringFilter>;

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.StringNullableFilter>;

export const AttendanceListRelationFilterSchema: z.ZodType<Prisma.AttendanceListRelationFilter> = z.object({
  every: z.lazy(() => AttendanceWhereInputSchema).optional(),
  some: z.lazy(() => AttendanceWhereInputSchema).optional(),
  none: z.lazy(() => AttendanceWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceListRelationFilter>;

export const VisitationListRelationFilterSchema: z.ZodType<Prisma.VisitationListRelationFilter> = z.object({
  every: z.lazy(() => VisitationWhereInputSchema).optional(),
  some: z.lazy(() => VisitationWhereInputSchema).optional(),
  none: z.lazy(() => VisitationWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationListRelationFilter>;

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SortOrderInput>;

export const AttendanceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AttendanceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceOrderByRelationAggregateInput>;

export const VisitationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VisitationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationOrderByRelationAggregateInput>;

export const StudentCountOrderByAggregateInputSchema: z.ZodType<Prisma.StudentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  className: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.StudentCountOrderByAggregateInput>;

export const StudentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StudentAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.StudentAvgOrderByAggregateInput>;

export const StudentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StudentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  className: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.StudentMaxOrderByAggregateInput>;

export const StudentMinOrderByAggregateInputSchema: z.ZodType<Prisma.StudentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  className: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.StudentMinOrderByAggregateInput>;

export const StudentSumOrderByAggregateInputSchema: z.ZodType<Prisma.StudentSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.StudentSumOrderByAggregateInput>;

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict() as z.ZodType<Prisma.IntWithAggregatesFilter>;

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict() as z.ZodType<Prisma.DateTimeWithAggregatesFilter>;

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict() as z.ZodType<Prisma.StringWithAggregatesFilter>;

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.StringNullableWithAggregatesFilter>;

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.IntNullableFilter>;

export const StudentNullableRelationFilterSchema: z.ZodType<Prisma.StudentNullableRelationFilter> = z.object({
  is: z.lazy(() => StudentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => StudentWhereInputSchema).optional().nullable()
}).strict() as z.ZodType<Prisma.StudentNullableRelationFilter>;

export const AttendanceCountOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceCountOrderByAggregateInput>;

export const AttendanceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceAvgOrderByAggregateInput>;

export const AttendanceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceMaxOrderByAggregateInput>;

export const AttendanceMinOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceMinOrderByAggregateInput>;

export const AttendanceSumOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AttendanceSumOrderByAggregateInput>;

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.IntNullableWithAggregatesFilter>;

export const VisitationCountOrderByAggregateInputSchema: z.ZodType<Prisma.VisitationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationCountOrderByAggregateInput>;

export const VisitationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VisitationAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationAvgOrderByAggregateInput>;

export const VisitationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VisitationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationMaxOrderByAggregateInput>;

export const VisitationMinOrderByAggregateInputSchema: z.ZodType<Prisma.VisitationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationMinOrderByAggregateInput>;

export const VisitationSumOrderByAggregateInputSchema: z.ZodType<Prisma.VisitationSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  studentId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.VisitationSumOrderByAggregateInput>;

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserCountOrderByAggregateInput>;

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserAvgOrderByAggregateInput>;

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserMaxOrderByAggregateInput>;

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserMinOrderByAggregateInput>;

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserSumOrderByAggregateInput>;

export const AttendanceCreateNestedManyWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceCreateNestedManyWithoutStudentInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStudentInputSchema),z.lazy(() => AttendanceCreateWithoutStudentInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutStudentInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutStudentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyStudentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceCreateNestedManyWithoutStudentInput>;

export const VisitationCreateNestedManyWithoutStudentInputSchema: z.ZodType<Prisma.VisitationCreateNestedManyWithoutStudentInput> = z.object({
  create: z.union([ z.lazy(() => VisitationCreateWithoutStudentInputSchema),z.lazy(() => VisitationCreateWithoutStudentInputSchema).array(),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitationCreateOrConnectWithoutStudentInputSchema),z.lazy(() => VisitationCreateOrConnectWithoutStudentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitationCreateManyStudentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.VisitationCreateNestedManyWithoutStudentInput>;

export const AttendanceUncheckedCreateNestedManyWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStudentInputSchema),z.lazy(() => AttendanceCreateWithoutStudentInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutStudentInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutStudentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyStudentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentInput>;

export const VisitationUncheckedCreateNestedManyWithoutStudentInputSchema: z.ZodType<Prisma.VisitationUncheckedCreateNestedManyWithoutStudentInput> = z.object({
  create: z.union([ z.lazy(() => VisitationCreateWithoutStudentInputSchema),z.lazy(() => VisitationCreateWithoutStudentInputSchema).array(),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitationCreateOrConnectWithoutStudentInputSchema),z.lazy(() => VisitationCreateOrConnectWithoutStudentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitationCreateManyStudentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.VisitationUncheckedCreateNestedManyWithoutStudentInput>;

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict() as z.ZodType<Prisma.StringFieldUpdateOperationsInput>;

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput>;

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict() as z.ZodType<Prisma.IntFieldUpdateOperationsInput>;

export const AttendanceUpdateManyWithoutStudentNestedInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithoutStudentNestedInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStudentInputSchema),z.lazy(() => AttendanceCreateWithoutStudentInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutStudentInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutStudentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutStudentInputSchema),z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutStudentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyStudentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutStudentInputSchema),z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutStudentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutStudentInputSchema),z.lazy(() => AttendanceUpdateManyWithWhereWithoutStudentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceUpdateManyWithoutStudentNestedInput>;

export const VisitationUpdateManyWithoutStudentNestedInputSchema: z.ZodType<Prisma.VisitationUpdateManyWithoutStudentNestedInput> = z.object({
  create: z.union([ z.lazy(() => VisitationCreateWithoutStudentInputSchema),z.lazy(() => VisitationCreateWithoutStudentInputSchema).array(),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitationCreateOrConnectWithoutStudentInputSchema),z.lazy(() => VisitationCreateOrConnectWithoutStudentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VisitationUpsertWithWhereUniqueWithoutStudentInputSchema),z.lazy(() => VisitationUpsertWithWhereUniqueWithoutStudentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitationCreateManyStudentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VisitationUpdateWithWhereUniqueWithoutStudentInputSchema),z.lazy(() => VisitationUpdateWithWhereUniqueWithoutStudentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VisitationUpdateManyWithWhereWithoutStudentInputSchema),z.lazy(() => VisitationUpdateManyWithWhereWithoutStudentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VisitationScalarWhereInputSchema),z.lazy(() => VisitationScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.VisitationUpdateManyWithoutStudentNestedInput>;

export const AttendanceUncheckedUpdateManyWithoutStudentNestedInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutStudentNestedInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStudentInputSchema),z.lazy(() => AttendanceCreateWithoutStudentInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutStudentInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutStudentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutStudentInputSchema),z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutStudentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyStudentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutStudentInputSchema),z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutStudentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutStudentInputSchema),z.lazy(() => AttendanceUpdateManyWithWhereWithoutStudentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutStudentNestedInput>;

export const VisitationUncheckedUpdateManyWithoutStudentNestedInputSchema: z.ZodType<Prisma.VisitationUncheckedUpdateManyWithoutStudentNestedInput> = z.object({
  create: z.union([ z.lazy(() => VisitationCreateWithoutStudentInputSchema),z.lazy(() => VisitationCreateWithoutStudentInputSchema).array(),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VisitationCreateOrConnectWithoutStudentInputSchema),z.lazy(() => VisitationCreateOrConnectWithoutStudentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VisitationUpsertWithWhereUniqueWithoutStudentInputSchema),z.lazy(() => VisitationUpsertWithWhereUniqueWithoutStudentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VisitationCreateManyStudentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VisitationWhereUniqueInputSchema),z.lazy(() => VisitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VisitationUpdateWithWhereUniqueWithoutStudentInputSchema),z.lazy(() => VisitationUpdateWithWhereUniqueWithoutStudentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VisitationUpdateManyWithWhereWithoutStudentInputSchema),z.lazy(() => VisitationUpdateManyWithWhereWithoutStudentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VisitationScalarWhereInputSchema),z.lazy(() => VisitationScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.VisitationUncheckedUpdateManyWithoutStudentNestedInput>;

export const StudentCreateNestedOneWithoutAttendancesInputSchema: z.ZodType<Prisma.StudentCreateNestedOneWithoutAttendancesInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutAttendancesInputSchema),z.lazy(() => StudentUncheckedCreateWithoutAttendancesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutAttendancesInputSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentCreateNestedOneWithoutAttendancesInput>;

export const StudentUpdateOneWithoutAttendancesNestedInputSchema: z.ZodType<Prisma.StudentUpdateOneWithoutAttendancesNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutAttendancesInputSchema),z.lazy(() => StudentUncheckedCreateWithoutAttendancesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutAttendancesInputSchema).optional(),
  upsert: z.lazy(() => StudentUpsertWithoutAttendancesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StudentUpdateToOneWithWhereWithoutAttendancesInputSchema),z.lazy(() => StudentUpdateWithoutAttendancesInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutAttendancesInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.StudentUpdateOneWithoutAttendancesNestedInput>;

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict() as z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput>;

export const StudentCreateNestedOneWithoutVisitationsInputSchema: z.ZodType<Prisma.StudentCreateNestedOneWithoutVisitationsInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutVisitationsInputSchema),z.lazy(() => StudentUncheckedCreateWithoutVisitationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutVisitationsInputSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentCreateNestedOneWithoutVisitationsInput>;

export const StudentUpdateOneWithoutVisitationsNestedInputSchema: z.ZodType<Prisma.StudentUpdateOneWithoutVisitationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutVisitationsInputSchema),z.lazy(() => StudentUncheckedCreateWithoutVisitationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutVisitationsInputSchema).optional(),
  upsert: z.lazy(() => StudentUpsertWithoutVisitationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StudentUpdateToOneWithWhereWithoutVisitationsInputSchema),z.lazy(() => StudentUpdateWithoutVisitationsInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutVisitationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.StudentUpdateOneWithoutVisitationsNestedInput>;

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedIntFilter>;

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedDateTimeFilter>;

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedStringFilter>;

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedStringNullableFilter>;

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedIntWithAggregatesFilter>;

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedFloatFilter>;

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedStringWithAggregatesFilter>;

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter>;

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedIntNullableFilter>;

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter>;

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedFloatNullableFilter>;

export const AttendanceCreateWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceCreateWithoutStudentInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  day: z.number().int(),
  end: z.number().int()
}).strict() as z.ZodType<Prisma.AttendanceCreateWithoutStudentInput>;

export const AttendanceUncheckedCreateWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateWithoutStudentInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  day: z.number().int(),
  end: z.number().int()
}).strict() as z.ZodType<Prisma.AttendanceUncheckedCreateWithoutStudentInput>;

export const AttendanceCreateOrConnectWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceCreateOrConnectWithoutStudentInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStudentInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema) ]),
}).strict() as z.ZodType<Prisma.AttendanceCreateOrConnectWithoutStudentInput>;

export const AttendanceCreateManyStudentInputEnvelopeSchema: z.ZodType<Prisma.AttendanceCreateManyStudentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AttendanceCreateManyStudentInputSchema),z.lazy(() => AttendanceCreateManyStudentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.AttendanceCreateManyStudentInputEnvelope>;

export const VisitationCreateWithoutStudentInputSchema: z.ZodType<Prisma.VisitationCreateWithoutStudentInput> = z.object({
  date: z.coerce.date(),
  start: z.number().int(),
  end: z.number().int().optional().nullable()
}).strict() as z.ZodType<Prisma.VisitationCreateWithoutStudentInput>;

export const VisitationUncheckedCreateWithoutStudentInputSchema: z.ZodType<Prisma.VisitationUncheckedCreateWithoutStudentInput> = z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  start: z.number().int(),
  end: z.number().int().optional().nullable()
}).strict() as z.ZodType<Prisma.VisitationUncheckedCreateWithoutStudentInput>;

export const VisitationCreateOrConnectWithoutStudentInputSchema: z.ZodType<Prisma.VisitationCreateOrConnectWithoutStudentInput> = z.object({
  where: z.lazy(() => VisitationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VisitationCreateWithoutStudentInputSchema),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema) ]),
}).strict() as z.ZodType<Prisma.VisitationCreateOrConnectWithoutStudentInput>;

export const VisitationCreateManyStudentInputEnvelopeSchema: z.ZodType<Prisma.VisitationCreateManyStudentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VisitationCreateManyStudentInputSchema),z.lazy(() => VisitationCreateManyStudentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.VisitationCreateManyStudentInputEnvelope>;

export const AttendanceUpsertWithWhereUniqueWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceUpdateWithoutStudentInputSchema),z.lazy(() => AttendanceUncheckedUpdateWithoutStudentInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutStudentInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutStudentInputSchema) ]),
}).strict() as z.ZodType<Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentInput>;

export const AttendanceUpdateWithWhereUniqueWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateWithoutStudentInputSchema),z.lazy(() => AttendanceUncheckedUpdateWithoutStudentInputSchema) ]),
}).strict() as z.ZodType<Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentInput>;

export const AttendanceUpdateManyWithWhereWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithWhereWithoutStudentInput> = z.object({
  where: z.lazy(() => AttendanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateManyMutationInputSchema),z.lazy(() => AttendanceUncheckedUpdateManyWithoutStudentInputSchema) ]),
}).strict() as z.ZodType<Prisma.AttendanceUpdateManyWithWhereWithoutStudentInput>;

export const AttendanceScalarWhereInputSchema: z.ZodType<Prisma.AttendanceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  day: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  end: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  studentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.AttendanceScalarWhereInput>;

export const VisitationUpsertWithWhereUniqueWithoutStudentInputSchema: z.ZodType<Prisma.VisitationUpsertWithWhereUniqueWithoutStudentInput> = z.object({
  where: z.lazy(() => VisitationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VisitationUpdateWithoutStudentInputSchema),z.lazy(() => VisitationUncheckedUpdateWithoutStudentInputSchema) ]),
  create: z.union([ z.lazy(() => VisitationCreateWithoutStudentInputSchema),z.lazy(() => VisitationUncheckedCreateWithoutStudentInputSchema) ]),
}).strict() as z.ZodType<Prisma.VisitationUpsertWithWhereUniqueWithoutStudentInput>;

export const VisitationUpdateWithWhereUniqueWithoutStudentInputSchema: z.ZodType<Prisma.VisitationUpdateWithWhereUniqueWithoutStudentInput> = z.object({
  where: z.lazy(() => VisitationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VisitationUpdateWithoutStudentInputSchema),z.lazy(() => VisitationUncheckedUpdateWithoutStudentInputSchema) ]),
}).strict() as z.ZodType<Prisma.VisitationUpdateWithWhereUniqueWithoutStudentInput>;

export const VisitationUpdateManyWithWhereWithoutStudentInputSchema: z.ZodType<Prisma.VisitationUpdateManyWithWhereWithoutStudentInput> = z.object({
  where: z.lazy(() => VisitationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VisitationUpdateManyMutationInputSchema),z.lazy(() => VisitationUncheckedUpdateManyWithoutStudentInputSchema) ]),
}).strict() as z.ZodType<Prisma.VisitationUpdateManyWithWhereWithoutStudentInput>;

export const VisitationScalarWhereInputSchema: z.ZodType<Prisma.VisitationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VisitationScalarWhereInputSchema),z.lazy(() => VisitationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VisitationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VisitationScalarWhereInputSchema),z.lazy(() => VisitationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  start: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  end: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  studentId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationScalarWhereInput>;

export const StudentCreateWithoutAttendancesInputSchema: z.ZodType<Prisma.StudentCreateWithoutAttendancesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().optional().nullable(),
  grade: z.number().int(),
  className: z.string(),
  visitations: z.lazy(() => VisitationCreateNestedManyWithoutStudentInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentCreateWithoutAttendancesInput>;

export const StudentUncheckedCreateWithoutAttendancesInputSchema: z.ZodType<Prisma.StudentUncheckedCreateWithoutAttendancesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().optional().nullable(),
  grade: z.number().int(),
  className: z.string(),
  visitations: z.lazy(() => VisitationUncheckedCreateNestedManyWithoutStudentInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUncheckedCreateWithoutAttendancesInput>;

export const StudentCreateOrConnectWithoutAttendancesInputSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutAttendancesInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudentCreateWithoutAttendancesInputSchema),z.lazy(() => StudentUncheckedCreateWithoutAttendancesInputSchema) ]),
}).strict() as z.ZodType<Prisma.StudentCreateOrConnectWithoutAttendancesInput>;

export const StudentUpsertWithoutAttendancesInputSchema: z.ZodType<Prisma.StudentUpsertWithoutAttendancesInput> = z.object({
  update: z.union([ z.lazy(() => StudentUpdateWithoutAttendancesInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutAttendancesInputSchema) ]),
  create: z.union([ z.lazy(() => StudentCreateWithoutAttendancesInputSchema),z.lazy(() => StudentUncheckedCreateWithoutAttendancesInputSchema) ]),
  where: z.lazy(() => StudentWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUpsertWithoutAttendancesInput>;

export const StudentUpdateToOneWithWhereWithoutAttendancesInputSchema: z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutAttendancesInput> = z.object({
  where: z.lazy(() => StudentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StudentUpdateWithoutAttendancesInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutAttendancesInputSchema) ]),
}).strict() as z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutAttendancesInput>;

export const StudentUpdateWithoutAttendancesInputSchema: z.ZodType<Prisma.StudentUpdateWithoutAttendancesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  className: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  visitations: z.lazy(() => VisitationUpdateManyWithoutStudentNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUpdateWithoutAttendancesInput>;

export const StudentUncheckedUpdateWithoutAttendancesInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateWithoutAttendancesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  className: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  visitations: z.lazy(() => VisitationUncheckedUpdateManyWithoutStudentNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUncheckedUpdateWithoutAttendancesInput>;

export const StudentCreateWithoutVisitationsInputSchema: z.ZodType<Prisma.StudentCreateWithoutVisitationsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().optional().nullable(),
  grade: z.number().int(),
  className: z.string(),
  attendances: z.lazy(() => AttendanceCreateNestedManyWithoutStudentInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentCreateWithoutVisitationsInput>;

export const StudentUncheckedCreateWithoutVisitationsInputSchema: z.ZodType<Prisma.StudentUncheckedCreateWithoutVisitationsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().optional().nullable(),
  grade: z.number().int(),
  className: z.string(),
  attendances: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutStudentInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUncheckedCreateWithoutVisitationsInput>;

export const StudentCreateOrConnectWithoutVisitationsInputSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutVisitationsInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudentCreateWithoutVisitationsInputSchema),z.lazy(() => StudentUncheckedCreateWithoutVisitationsInputSchema) ]),
}).strict() as z.ZodType<Prisma.StudentCreateOrConnectWithoutVisitationsInput>;

export const StudentUpsertWithoutVisitationsInputSchema: z.ZodType<Prisma.StudentUpsertWithoutVisitationsInput> = z.object({
  update: z.union([ z.lazy(() => StudentUpdateWithoutVisitationsInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutVisitationsInputSchema) ]),
  create: z.union([ z.lazy(() => StudentCreateWithoutVisitationsInputSchema),z.lazy(() => StudentUncheckedCreateWithoutVisitationsInputSchema) ]),
  where: z.lazy(() => StudentWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUpsertWithoutVisitationsInput>;

export const StudentUpdateToOneWithWhereWithoutVisitationsInputSchema: z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutVisitationsInput> = z.object({
  where: z.lazy(() => StudentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StudentUpdateWithoutVisitationsInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutVisitationsInputSchema) ]),
}).strict() as z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutVisitationsInput>;

export const StudentUpdateWithoutVisitationsInputSchema: z.ZodType<Prisma.StudentUpdateWithoutVisitationsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  className: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attendances: z.lazy(() => AttendanceUpdateManyWithoutStudentNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUpdateWithoutVisitationsInput>;

export const StudentUncheckedUpdateWithoutVisitationsInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateWithoutVisitationsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  className: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attendances: z.lazy(() => AttendanceUncheckedUpdateManyWithoutStudentNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.StudentUncheckedUpdateWithoutVisitationsInput>;

export const AttendanceCreateManyStudentInputSchema: z.ZodType<Prisma.AttendanceCreateManyStudentInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  day: z.number().int(),
  end: z.number().int()
}).strict() as z.ZodType<Prisma.AttendanceCreateManyStudentInput>;

export const VisitationCreateManyStudentInputSchema: z.ZodType<Prisma.VisitationCreateManyStudentInput> = z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  start: z.number().int(),
  end: z.number().int().optional().nullable()
}).strict() as z.ZodType<Prisma.VisitationCreateManyStudentInput>;

export const AttendanceUpdateWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceUpdateWithoutStudentInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  day: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceUpdateWithoutStudentInput>;

export const AttendanceUncheckedUpdateWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateWithoutStudentInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  day: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceUncheckedUpdateWithoutStudentInput>;

export const AttendanceUncheckedUpdateManyWithoutStudentInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutStudentInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  day: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutStudentInput>;

export const VisitationUpdateWithoutStudentInputSchema: z.ZodType<Prisma.VisitationUpdateWithoutStudentInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  start: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationUpdateWithoutStudentInput>;

export const VisitationUncheckedUpdateWithoutStudentInputSchema: z.ZodType<Prisma.VisitationUncheckedUpdateWithoutStudentInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  start: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationUncheckedUpdateWithoutStudentInput>;

export const VisitationUncheckedUpdateManyWithoutStudentInputSchema: z.ZodType<Prisma.VisitationUncheckedUpdateManyWithoutStudentInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  start: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  end: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.VisitationUncheckedUpdateManyWithoutStudentInput>;

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const StudentFindFirstArgsSchema: z.ZodType<Prisma.StudentFindFirstArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudentScalarFieldEnumSchema,StudentScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.StudentFindFirstArgs>;

export const StudentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StudentFindFirstOrThrowArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudentScalarFieldEnumSchema,StudentScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.StudentFindFirstOrThrowArgs>;

export const StudentFindManyArgsSchema: z.ZodType<Prisma.StudentFindManyArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudentScalarFieldEnumSchema,StudentScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.StudentFindManyArgs>;

export const StudentAggregateArgsSchema: z.ZodType<Prisma.StudentAggregateArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.StudentAggregateArgs>;

export const StudentGroupByArgsSchema: z.ZodType<Prisma.StudentGroupByArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithAggregationInputSchema.array(),StudentOrderByWithAggregationInputSchema ]).optional(),
  by: StudentScalarFieldEnumSchema.array(),
  having: StudentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.StudentGroupByArgs>;

export const StudentFindUniqueArgsSchema: z.ZodType<Prisma.StudentFindUniqueArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.StudentFindUniqueArgs>;

export const StudentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StudentFindUniqueOrThrowArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.StudentFindUniqueOrThrowArgs>;

export const AttendanceFindFirstArgsSchema: z.ZodType<Prisma.AttendanceFindFirstArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(),AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AttendanceScalarFieldEnumSchema,AttendanceScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceFindFirstArgs>;

export const AttendanceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AttendanceFindFirstOrThrowArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(),AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AttendanceScalarFieldEnumSchema,AttendanceScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceFindFirstOrThrowArgs>;

export const AttendanceFindManyArgsSchema: z.ZodType<Prisma.AttendanceFindManyArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(),AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AttendanceScalarFieldEnumSchema,AttendanceScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.AttendanceFindManyArgs>;

export const AttendanceAggregateArgsSchema: z.ZodType<Prisma.AttendanceAggregateArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(),AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.AttendanceAggregateArgs>;

export const AttendanceGroupByArgsSchema: z.ZodType<Prisma.AttendanceGroupByArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithAggregationInputSchema.array(),AttendanceOrderByWithAggregationInputSchema ]).optional(),
  by: AttendanceScalarFieldEnumSchema.array(),
  having: AttendanceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.AttendanceGroupByArgs>;

export const AttendanceFindUniqueArgsSchema: z.ZodType<Prisma.AttendanceFindUniqueArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AttendanceFindUniqueArgs>;

export const AttendanceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AttendanceFindUniqueOrThrowArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AttendanceFindUniqueOrThrowArgs>;

export const VisitationFindFirstArgsSchema: z.ZodType<Prisma.VisitationFindFirstArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  where: VisitationWhereInputSchema.optional(),
  orderBy: z.union([ VisitationOrderByWithRelationInputSchema.array(),VisitationOrderByWithRelationInputSchema ]).optional(),
  cursor: VisitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisitationScalarFieldEnumSchema,VisitationScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.VisitationFindFirstArgs>;

export const VisitationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VisitationFindFirstOrThrowArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  where: VisitationWhereInputSchema.optional(),
  orderBy: z.union([ VisitationOrderByWithRelationInputSchema.array(),VisitationOrderByWithRelationInputSchema ]).optional(),
  cursor: VisitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisitationScalarFieldEnumSchema,VisitationScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.VisitationFindFirstOrThrowArgs>;

export const VisitationFindManyArgsSchema: z.ZodType<Prisma.VisitationFindManyArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  where: VisitationWhereInputSchema.optional(),
  orderBy: z.union([ VisitationOrderByWithRelationInputSchema.array(),VisitationOrderByWithRelationInputSchema ]).optional(),
  cursor: VisitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VisitationScalarFieldEnumSchema,VisitationScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.VisitationFindManyArgs>;

export const VisitationAggregateArgsSchema: z.ZodType<Prisma.VisitationAggregateArgs> = z.object({
  where: VisitationWhereInputSchema.optional(),
  orderBy: z.union([ VisitationOrderByWithRelationInputSchema.array(),VisitationOrderByWithRelationInputSchema ]).optional(),
  cursor: VisitationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.VisitationAggregateArgs>;

export const VisitationGroupByArgsSchema: z.ZodType<Prisma.VisitationGroupByArgs> = z.object({
  where: VisitationWhereInputSchema.optional(),
  orderBy: z.union([ VisitationOrderByWithAggregationInputSchema.array(),VisitationOrderByWithAggregationInputSchema ]).optional(),
  by: VisitationScalarFieldEnumSchema.array(),
  having: VisitationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.VisitationGroupByArgs>;

export const VisitationFindUniqueArgsSchema: z.ZodType<Prisma.VisitationFindUniqueArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  where: VisitationWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.VisitationFindUniqueArgs>;

export const VisitationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VisitationFindUniqueOrThrowArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  where: VisitationWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.VisitationFindUniqueOrThrowArgs>;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.UserFindFirstArgs>;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.UserFindFirstOrThrowArgs>;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.UserFindManyArgs>;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.UserAggregateArgs>;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.UserGroupByArgs>;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UserFindUniqueArgs>;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UserFindUniqueOrThrowArgs>;

export const StudentCreateArgsSchema: z.ZodType<Prisma.StudentCreateArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  data: z.union([ StudentCreateInputSchema,StudentUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.StudentCreateArgs>;

export const StudentUpsertArgsSchema: z.ZodType<Prisma.StudentUpsertArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
  create: z.union([ StudentCreateInputSchema,StudentUncheckedCreateInputSchema ]),
  update: z.union([ StudentUpdateInputSchema,StudentUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.StudentUpsertArgs>;

export const StudentCreateManyArgsSchema: z.ZodType<Prisma.StudentCreateManyArgs> = z.object({
  data: z.union([ StudentCreateManyInputSchema,StudentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.StudentCreateManyArgs>;

export const StudentDeleteArgsSchema: z.ZodType<Prisma.StudentDeleteArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.StudentDeleteArgs>;

export const StudentUpdateArgsSchema: z.ZodType<Prisma.StudentUpdateArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  data: z.union([ StudentUpdateInputSchema,StudentUncheckedUpdateInputSchema ]),
  where: StudentWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.StudentUpdateArgs>;

export const StudentUpdateManyArgsSchema: z.ZodType<Prisma.StudentUpdateManyArgs> = z.object({
  data: z.union([ StudentUpdateManyMutationInputSchema,StudentUncheckedUpdateManyInputSchema ]),
  where: StudentWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.StudentUpdateManyArgs>;

export const StudentDeleteManyArgsSchema: z.ZodType<Prisma.StudentDeleteManyArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.StudentDeleteManyArgs>;

export const AttendanceCreateArgsSchema: z.ZodType<Prisma.AttendanceCreateArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  data: z.union([ AttendanceCreateInputSchema,AttendanceUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.AttendanceCreateArgs>;

export const AttendanceUpsertArgsSchema: z.ZodType<Prisma.AttendanceUpsertArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereUniqueInputSchema,
  create: z.union([ AttendanceCreateInputSchema,AttendanceUncheckedCreateInputSchema ]),
  update: z.union([ AttendanceUpdateInputSchema,AttendanceUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.AttendanceUpsertArgs>;

export const AttendanceCreateManyArgsSchema: z.ZodType<Prisma.AttendanceCreateManyArgs> = z.object({
  data: z.union([ AttendanceCreateManyInputSchema,AttendanceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.AttendanceCreateManyArgs>;

export const AttendanceDeleteArgsSchema: z.ZodType<Prisma.AttendanceDeleteArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AttendanceDeleteArgs>;

export const AttendanceUpdateArgsSchema: z.ZodType<Prisma.AttendanceUpdateArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  data: z.union([ AttendanceUpdateInputSchema,AttendanceUncheckedUpdateInputSchema ]),
  where: AttendanceWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.AttendanceUpdateArgs>;

export const AttendanceUpdateManyArgsSchema: z.ZodType<Prisma.AttendanceUpdateManyArgs> = z.object({
  data: z.union([ AttendanceUpdateManyMutationInputSchema,AttendanceUncheckedUpdateManyInputSchema ]),
  where: AttendanceWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.AttendanceUpdateManyArgs>;

export const AttendanceDeleteManyArgsSchema: z.ZodType<Prisma.AttendanceDeleteManyArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.AttendanceDeleteManyArgs>;

export const VisitationCreateArgsSchema: z.ZodType<Prisma.VisitationCreateArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  data: z.union([ VisitationCreateInputSchema,VisitationUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.VisitationCreateArgs>;

export const VisitationUpsertArgsSchema: z.ZodType<Prisma.VisitationUpsertArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  where: VisitationWhereUniqueInputSchema,
  create: z.union([ VisitationCreateInputSchema,VisitationUncheckedCreateInputSchema ]),
  update: z.union([ VisitationUpdateInputSchema,VisitationUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.VisitationUpsertArgs>;

export const VisitationCreateManyArgsSchema: z.ZodType<Prisma.VisitationCreateManyArgs> = z.object({
  data: z.union([ VisitationCreateManyInputSchema,VisitationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.VisitationCreateManyArgs>;

export const VisitationDeleteArgsSchema: z.ZodType<Prisma.VisitationDeleteArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  where: VisitationWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.VisitationDeleteArgs>;

export const VisitationUpdateArgsSchema: z.ZodType<Prisma.VisitationUpdateArgs> = z.object({
  select: VisitationSelectSchema.optional(),
  include: VisitationIncludeSchema.optional(),
  data: z.union([ VisitationUpdateInputSchema,VisitationUncheckedUpdateInputSchema ]),
  where: VisitationWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.VisitationUpdateArgs>;

export const VisitationUpdateManyArgsSchema: z.ZodType<Prisma.VisitationUpdateManyArgs> = z.object({
  data: z.union([ VisitationUpdateManyMutationInputSchema,VisitationUncheckedUpdateManyInputSchema ]),
  where: VisitationWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.VisitationUpdateManyArgs>;

export const VisitationDeleteManyArgsSchema: z.ZodType<Prisma.VisitationDeleteManyArgs> = z.object({
  where: VisitationWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.VisitationDeleteManyArgs>;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.UserCreateArgs>;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.UserUpsertArgs>;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.UserCreateManyArgs>;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UserDeleteArgs>;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UserUpdateArgs>;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.UserUpdateManyArgs>;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.UserDeleteManyArgs>;