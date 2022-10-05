import { expect } from "chai";
import supertest  from "supertest";
import app from "../server.js";

const request = supertest(app);

describe('GraphQL', () => {
    it('Return Savory product', (done) => {
        request.post('/graphql').send({
            query: `{product(id: 1){name, price}}`
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
            if (err) return done(err);
            expect(res.body.data.product.name).equal("Savory");
            done();  
        });
    });

    it('Must return empty list', (done) => {
        request.post('/graphql').send({
            query: `{products(search: "emptylist"){name, price}}`
        })
        .end(function (err, res) {
            if (err) return done(err);
            expect(res.body.data.products).to.be.empty;
            done();  
        });
    });

    it('Must return an array list', (done) => {
        request.post('/graphql').send({
            query: `{products{name, price}}`
        })
        .end(function (err, res) {
            if (err) return done(err);
            expect(res.body.data.products, 'What kind of products do you want?').to.be.an('array');
            done();  
        });
    });

    it('Must return list of products have price greater than 50', (done) => {
        request.post('/graphql').send({
            query: `{products(filter: {min_price: 50}){name, price}}`
        })
        .end(function (err, res) {
            if (err) return done(err);
            res.body.data.products.forEach(product => {
                expect(product.price).to.be.gte(50);
            });
            done();   
        });
    });
});
