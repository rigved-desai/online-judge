module.exports = {
    PORT: process.env.PORT || 8000,
    SESSION_SECRET: process.env.SESSION_SECRET,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    CODE_COMPILATION_FAILED: process.env.CODE_COMPILATION_FAILED,
    CODE_TC_FAILED: process.env.CODE_TC_FAILED,
    CODE_TC_PASSED: process.env.CODE_TC_PASSED,
    CODE_SERVER_ERROR: process.env.CODE_SERVER_ERROR
}