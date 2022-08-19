const expect = chai.expect;
mocha.setup("mocha");
it("I can test", function() {
    expect(1 + 1).to.equal(3);
    expect(NaN).to.be.NaN
})
mocha.run();