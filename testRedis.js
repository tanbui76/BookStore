const Redis = require('ioredis');

const redisConfig = {
    host: 'localhost',
    port: 6379,
    // Add more configurations as needed, like password, etc.
};

const redisClient = new Redis(redisConfig);

// Hàm kiểm tra kết nối
async function testRedisConnection() {
    try {
        await redisClient.ping();
        console.log('Kết nối tới Redis thành công!');
    } catch (error) {
        console.error('Kết nối tới Redis thất bại:', error);
    } finally {
        redisClient.quit(); // Đóng kết nối sau khi kiểm tra
    }
}

testRedisConnection();