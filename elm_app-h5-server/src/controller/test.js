const test = require('../../data/test')

module.exports = (req, res, next) => {
    const testData = test
    testData.desc = '自定义的测试数据'
    res.json(testData)
}