import Agenda from '../../src/domain/agenda';
const assert = require("chai").assert;
const expect = require("chai").expect;

describe("Agenda tests: ", () => {

    const agenda = new Agenda();

    it("Agenda test method must return 'test'", () => {
        assert.equal(agenda.testMethod(), 'test');
    });

    it("Agenda error method must throw 'Error'", () => {
        expect(() => {
            agenda.testError();
        }).to.throw(Error);
    });
});
