import UsersHelper from '../helpers/users.helper';
import { getRandomItem } from '../helpers/common.helper';
import { expect } from 'chai';
import ConfigHelper from "../helpers/config.helper";

describe('Users', function () {
    let userHelper = new UsersHelper();
    let userId;

    before(async function () {
        await userHelper.create();
        userId = userHelper.response.body.id;
    });
    after( async function() {
        const configHelper = new ConfigHelper();
        await configHelper.wipeDate();
    });

    describe('User creation', function () {
            it('response status code is 200', function () {
                expect(userHelper.response.statusCode).to.eq(200);
            });
            it('response body contain id', function () {
                expect(userHelper.response.body.id).not.to.be.undefined;
            });
            it('response body contain amount', function () {
                expect(userHelper.response.body.amount).not.to.be.undefined;
            });
        });
    describe('Get user by ID', function () {
        before(async function() {
            await userHelper.getById(userId)
        } )
         it('response status code is 200', function () {
            expect(userHelper.response.statusCode).to.eq(200);
        });
        it('response body contain id', function () {
            expect(userHelper.response.body.id).not.to.be.undefined;
        });
        it('response body contain amount', function () {
            expect(userHelper.response.body.amount).not.to.be.undefined;
        });
    });
    describe('Get all users', function () {
        before(async function() {
            await userHelper.create()
            await userHelper.getAll()
        })
        it('response status code is 200', function () {
            expect(userHelper.response.statusCode).to.eq(200);
        });
        it('response body contain list of 2 or more items', function () {
            expect(userHelper.response.body.length).to.be.at.least(2);
        });
        it('response body array item contain id', function () {
            expect(getRandomItem(userHelper.response.body).id).not.to.be.undefined;
        });
        it('response body array item contain amount', function () {
            expect(getRandomItem(userHelper.response.body).amount).not.to.be.undefined;
        });
    });
    describe('User deletion', function () {
        before(async function() {
            await userHelper.delete(userId);
        } )
        it('response status code is 200', function () {
            expect(userHelper.response.statusCode).to.eq(200);
        });
        it('response body contain success message', function () {
            expect(userHelper.response.body.message).to.eq('User deleted.');
        })
    });
});