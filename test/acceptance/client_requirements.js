const server = require('../../server');
const Conversion = require('../../server/models').Conversion;

describe('requests', () => {
  before(server.start);
  after(server.stop);

  describe('Loading Angular', () => {
    describe('GET /', () => {
      it('responds ok', (done) => {
        request('/').then((resp) => {
          expect(resp).to.not.be.null;
          done();
        }).catch(done);
      });
    });
  });

  describe('Conversions', () => {
    beforeEach((done) => {
      Conversion.remove({}, () => {
        done();
      });
    });

    describe('/GET conversion', () => {
      it('it should GET all the conversions', (done) => {
        request('/conversion').then((resp) => {
          expect(resp.statusCode).to.eql(200);
          expect(resp.body).to.be.an('array');
          expect(resp.body).to.have.length(0);
          done();
        }).catch(done);
      });
    });

    describe('/POST conversion', () => {
      it('it should POST a conversion', (done) => {
        const conversion = {
          input: 'pdf',
          output: 'text',
          data: '',
        };
        request('/conversion', 'POST', conversion).then((resp) => {
          expect(resp.statusCode).to.eql(200);
          expect(resp.body).to.be.a('object');
          expect(resp.body.position).to.eql(1);
          done();
        }).catch(done);
      });
    });
  });

  describe('/DELETE/:id conversion', () => {
    it('it should DELETE a conversion given the id', (done) => {
      done();
    });
  });
});
