const asert = require('assert')

const testFunc = () => {
	return 2 * 5
}

describe('fetch user', () => {
	it('descript', done => {
		asert.strictEqual(testFunc(), 10)
		done()
	})
})
