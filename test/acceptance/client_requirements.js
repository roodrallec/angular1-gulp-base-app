describe('GET /', () => {
  before(server.start);
  after(server.stop);

  it('responds', (done) => {
    request('/').then((resp = {}) => {
      expect(resp.status).to.eq(200);
      done();
    }).catch(done);
  });
});
