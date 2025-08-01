// 新API格式的模拟数据

// 模拟用户数据 - 新API格式
const mockUsers = [
  {
    id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
    displayName: '张老师',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    role: 'TEACHER'
  },
  {
    id: 'b1eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
    displayName: '李小明',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    role: 'STUDENT'
  },
  {
    id: 'c2eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
    displayName: '王管理员',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    role: 'ADMIN'
  },
  {
    id: 'd3eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
    displayName: '李老师',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    role: 'TEACHER'
  }
];

// 模拟知识点数据
const mockKnowledgePoints = [
  {
    id: 'e4eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
    name: '指令集',
    description: '指令集体系结构',
    subject: '计算机组成原理'
  },
  {
    id: 'f5eebc99-9c0b-4ef8-bb6d-6bb9bd380a16',
    name: 'CPU设计',
    description: 'CPU的组成和工作原理',
    subject: '计算机组成原理'
  },
  {
    id: 'g6eebc99-9c0b-4ef8-bb6d-6bb9bd380a17',
    name: '数字电路',
    description: '数字逻辑电路的设计',
    subject: '数字逻辑'
  },
  {
    id: 'h7eebc99-9c0b-4ef8-bb6d-6bb9bd380a18',
    name: '时序逻辑',
    description: '时序逻辑电路的基础',
    subject: '数字逻辑'
  }
];

// 模拟课程数据 - 新API格式
const mockCourses = [
  {
    id: 'i8eebc99-9c0b-4ef8-bb6d-6bb9bd380a19',
    name: '计算机组成原理',
    description: '学习计算机硬件系统的组成和工作原理',
    coverImageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    teacher: mockUsers[0], // 张老师
    studentCount: 45,
    createdAt: '2025-07-01T09:00:00Z',
    updatedAt: '2025-07-01T09:00:00Z'
  },
  {
    id: 'j9eebc99-9c0b-4ef8-bb6d-6bb9bd380a20',
    name: '数字逻辑',
    description: '学习数字电路的设计和分析',
    coverImageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop',
    teacher: mockUsers[3], // 李老师
    studentCount: 32,
    createdAt: '2025-07-01T09:00:00Z',
    updatedAt: '2025-07-01T09:00:00Z'
  }
];

// 模拟题目数据 - 新API格式
const mockQuestions = [
  {
    id: 'k0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21',
    type: 'TRUE_FALSE',
    difficulty: 'MEDIUM',
    content: '在编译选项中增加 –fopenmp，修改omp_set_num_threads(2)中的数字（如改为4）可以改变线程数量。',
    explanation: '修改omp_set_num_threads的参数可以改变创建的线程数量。',
    knowledgePoints: [mockKnowledgePoints[0]], // 指令集
    creator: mockUsers[0], // 张老师
    createdAt: '2025-07-05T11:00:00Z',
    updatedAt: '2025-07-05T11:00:00Z'
  },
  {
    id: 'l1eebc99-9c0b-4ef8-bb6d-6bb9bd380a22',
    type: 'TRUE_FALSE',
    difficulty: 'MEDIUM',
    content: '执行跳转指令时，尽管寄存器文件输出内容，但因控制信号未被处理。',
    explanation: '控制信号决定哪些数据被实际使用。',
    knowledgePoints: [mockKnowledgePoints[1]], // CPU设计
    creator: mockUsers[0], // 张老师
    createdAt: '2025-07-05T11:00:00Z',
    updatedAt: '2025-07-05T11:00:00Z'
  },
  {
    id: 'm2eebc99-9c0b-4ef8-bb6d-6bb9bd380a23',
    type: 'SINGLE_CHOICE',
    difficulty: 'MEDIUM',
    content: '以下关于数字电路的说法错误的是？',
    explanation: '数字电路基于离散信号处理。',
    knowledgePoints: [mockKnowledgePoints[2]], // 数字电路
    creator: mockUsers[3], // 李老师
    createdAt: '2025-07-05T11:00:00Z',
    updatedAt: '2025-07-05T11:00:00Z'
  }
];

// 模拟作业数据 - 新API格式
const mockAssignments = [
  {
    id: 'n3eebc99-9c0b-4ef8-bb6d-6bb9bd380a24',
    title: '计算机组成原理练习',
    description: '完成计算机组成原理相关的练习题',
    course: mockCourses[0], // 计算机组成原理
    creator: mockUsers[0], // 张老师
    questions: [mockQuestions[0], mockQuestions[1]],
    dueDate: '2025-07-20T23:59:59Z',
    createdAt: '2025-07-08T14:00:00Z',
    updatedAt: '2025-07-08T14:00:00Z'
  },
  {
    id: 'o4eebc99-9c0b-4ef8-bb6d-6bb9bd380a25',
    title: '数字逻辑练习',
    description: '完成数字逻辑相关的练习题',
    course: mockCourses[1], // 数字逻辑
    creator: mockUsers[3], // 李老师
    questions: [mockQuestions[2]],
    dueDate: '2025-07-20T23:59:59Z',
    createdAt: '2025-07-08T14:00:00Z',
    updatedAt: '2025-07-08T14:00:00Z'
  }
];

// 模拟通知数据 - 新API格式
const mockNotifications = [
  {
    id: 'p5eebc99-9c0b-4ef8-bb6d-6bb9bd380a26',
    title: '新作业发布',
    content: '您有新的计算机组成原理作业需要完成',
    type: 'ASSIGNMENT',
    sender: mockUsers[0], // 张老师
    recipient: mockUsers[1], // 李小明
    isRead: false,
    readAt: null,
    createdAt: '2025-07-08T15:00:00Z'
  },
  {
    id: 'q6eebc99-9c0b-4ef8-bb6d-6bb9bd380a27',
    title: '成绩已发布',
    content: '您的计算机组成原理作业已批改完成',
    type: 'GRADE',
    sender: mockUsers[0], // 张老师
    recipient: mockUsers[1], // 李小明
    isRead: false,
    readAt: null,
    createdAt: '2025-07-08T16:00:00Z'
  },
  {
    id: 'r7eebc99-9c0b-4ef8-bb6d-6bb9bd380a28',
    title: '系统维护通知',
    content: '系统将于今晚进行维护',
    type: 'SYSTEM',
    sender: mockUsers[2], // 王管理员
    recipient: mockUsers[1], // 李小明
    isRead: true,
    readAt: '2025-07-08T17:00:00Z',
    createdAt: '2025-07-08T12:00:00Z'
  }
];

// 模拟性能统计数据 - 新API格式
const mockPerformanceStats = {
  averageAccuracy: 0.85,
  frequentlyMissedConcepts: ['指令集', '数字电路']
};

// 模拟存储对象数据
const mockStorageObjects = [
  {
    id: 's8eebc99-9c0b-4ef8-bb6d-6bb9bd380a29',
    objectKey: 'uploads/cpu-design.pdf',
    originalFilename: 'cpu-design.pdf',
    fileSize: 1024000,
    contentType: 'application/pdf',
    storageProvider: 'minio',
    bucketName: 'janus',
    embeddingStatus: 'COMPLETED',
    uploader: mockUsers[0], // 张老师
    createdAt: '2025-07-05T10:00:00Z',
    updatedAt: '2025-07-05T10:05:00Z'
  }
];

// 模拟作业提交数据
const mockSubmissions = [
  {
    id: 't9eebc99-9c0b-4ef8-bb6d-6bb9bd380a30',
    assignment: {
      id: 'n3eebc99-9c0b-4ef8-bb6d-6bb9bd380a24',
      title: '计算机组成原理练习',
      dueDate: '2025-07-20T23:59:59Z'
    },
    student: mockUsers[1], // 李小明
    answers: [
      {
        id: 'u0eebc99-9c0b-4ef8-bb6d-6bb9bd380a31',
        question: mockQuestions[0],
        answer: '对',
        isCorrect: true
      }
    ],
    score: 100.0,
    status: 'GRADED',
    submittedAt: '2025-07-10T10:00:00Z'
  }
];

// 兼容旧API的数据映射
const mockUsersOld = mockUsers.map(user => ({
  id: user.id,
  name: user.displayName,
  email: `${user.displayName.toLowerCase().replace(' ', '_')}@example.com`,
  avatar: user.avatarUrl,
  role: user.role.toLowerCase()
}));

const mockCoursesOld = mockCourses.map(course => ({
  id: course.id,
  name: course.name,
  description: course.description,
  teacher: course.teacher.displayName,
  students: course.studentCount,
  progress: Math.floor(Math.random() * 100),
  image: course.coverImageUrl
}));

const mockQuestionsOld = mockQuestions.map(question => ({
  id: question.id,
  title: question.content,
  type: question.type.toLowerCase().replace('_', '-'),
  difficulty: question.difficulty.toLowerCase(),
  knowledgePoints: question.knowledgePoints.map(kp => kp.name),
  options: question.type === 'SINGLE_CHOICE' ? ['选项A', '选项B', '选项C', '选项D'] : undefined,
  correctAnswer: question.type === 'SINGLE_CHOICE' ? 0 : undefined,
  explanation: question.explanation
}));

const mockAssignmentsOld = mockAssignments.map(assignment => ({
  id: assignment.id,
  title: assignment.title,
  description: assignment.description,
  dueDate: assignment.dueDate,
  courseId: assignment.course.id,
  questions: mockQuestionsOld.filter(q => assignment.questions.some(aq => aq.id === q.id)),
  submissions: Math.floor(Math.random() * 50),
  maxScore: 100
}));

const mockNotificationsOld = mockNotifications.map(notification => ({
  id: notification.id,
  title: notification.sender ? notification.sender.displayName : '系统',
  content: notification.content,
  type: notification.type.toLowerCase(),
  isRead: notification.isRead,
  createdAt: notification.createdAt.split('T')[0],
  avatar: notification.sender?.avatarUrl
}));

const mockPerformanceStatsOld = {
  averageAccuracy: mockPerformanceStats.averageAccuracy * 100,
  frequentlyMissedConcepts: mockPerformanceStats.frequentlyMissedConcepts,
  classRanking: '前10%',
  knowledgePointMastery: {
    '指令集': 90,
    'CPU设计': 85,
    '数字电路': 80,
    '时序逻辑': 75
  },
  accuracyTrends: [
    { week: '第1周', accuracy: 75 },
    { week: '第2周', accuracy: 80 },
    { week: '第3周', accuracy: 78 },
    { week: '第4周', accuracy: 85 }
  ],
  questionTypeDistribution: [
    { type: '选择题', percentage: 30 },
    { type: '判断题', percentage: 40 },
    { type: '简答题', percentage: 80 },
    { type: '论述题', percentage: 40 }
  ]
};

// 继续保留旧数据用于兼容
const mockChapters = [
  {
    id: '1',
    title: '数字逻辑基础',
    order: 1,
    content: '学习数字逻辑的基本概念和门电路',
    exercises: mockQuestionsOld.slice(2, 3), // 数字电路相关题目
    isCompleted: true
  },
  {
    id: '2',
    title: 'CPU基础',
    order: 2,
    content: '学习CPU的基本组成和工作原理',
    exercises: mockQuestionsOld.slice(1, 2), // CPU设计相关题目
    isCompleted: false
  }
];

const mockSyllabus = {
  id: '1',
  courseId: 'j9eebc99-9c0b-4ef8-bb6d-6bb9bd380a20', // 数字逻辑
  chapters: mockChapters,
  isGenerating: false,
  progress: 60
};

const mockStudentAnalysis = [
  {
    id: '1',
    studentName: 'Ethan Harper',
    incorrectQuestions: 'Question 1',
    errorLocation: '指令集理解',
    suggestedCorrection: '复习指令集体系结构'
  },
  {
    id: '2',
    studentName: 'Olivia Bennett',
    incorrectQuestions: 'Question 2',
    errorLocation: 'CPU设计概念',
    suggestedCorrection: '学习CPU组成和功能'
  }
];

const teacherMenuItems = [
  { id: '1', label: '主页', icon: 'home', path: '/home', isActive: true },
  { id: '2', label: '课程准备', icon: 'book', path: '/syllabus' },
  { id: '3', label: '作业生成', icon: 'file', path: '/question' },
  { id: '4', label: '学习分析', icon: 'chart', path: '/overview' },
  { id: '5', label: '资源管理', icon: 'folder', path: '/home' },
  { id: '6', label: '个人中心', icon: 'user', path: '/home' }
];

const studentMenuItems = [
  { id: '1', label: '主页', icon: 'home', path: '/home', isActive: true },
  { id: '2', label: '我的作业', icon: 'video', path: '/assignments' },
  { id: '3', label: '练习评估', icon: 'file', path: '/practice' },
  { id: '4', label: '资源库', icon: 'bookmark', path: '/library' },
  { id: '5', label: '个人中心', icon: 'user', path: '/profile' }
];

const adminMenuItems = [
  { id: '1', label: '主页', icon: 'home', path: '/admin/dashboard' },
  { id: '2', label: '用户管理', icon: 'users', path: '/admin/users' },
  { id: '3', label: '资源管理', icon: 'folder', path: '/admin/resources' },
  { id: '4', label: '系统设置', icon: 'gear', path: '/admin/settings' }
];

const mockResources = [
  {
    id: 'res001',
    title: '计算机组成原理讲义.ppt',
    type: 'document',
    subject: '计算机组成原理',
    uploader: '张老师',
    uploadDate: '2024-07-20',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop'
  },
  {
    id: 'res002',
    title: '数字逻辑实验报告.pdf',
    type: 'assessment',
    subject: '数字逻辑',
    uploader: '李老师',
    uploadDate: '2024-07-18',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=200&fit=crop'
  },
  {
    id: 'res003',
    title: 'CPU设计原理.docx',
    type: 'document',
    subject: '计算机组成原理',
    uploader: '张老师',
    uploadDate: '2024-07-15',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop'
  },
  {
    id: 'res004',
    title: '数字电路视频.mp4',
    type: 'video',
    subject: '数字逻辑',
    uploader: '李老师',
    uploadDate: '2024-07-12',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop'
  }
];

module.exports = {
  // 新API格式
  mockUsers,
  mockCourses,
  mockQuestions,
  mockAssignments,
  mockNotifications,
  mockPerformanceStats,
  mockStorageObjects,
  mockSubmissions,
  mockKnowledgePoints,

  // 旧API格式（兼容）
  mockUsersOld,
  mockCoursesOld,
  mockQuestionsOld,
  mockAssignmentsOld,
  mockNotificationsOld,
  mockPerformanceStatsOld,
  mockSyllabus,
  mockStudentAnalysis,
  mockResources,
  teacherMenuItems,
  studentMenuItems,
  adminMenuItems
};