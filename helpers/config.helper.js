import supertest from 'supertest';

class ConfigHelper {
response
    async wipeDate() {
           await supertest(process.env.BASE_URL)
                .delete('/config')
                .set('Authorization', `bearer ${process.env.TOKEN}`)
                .then(res => {
                    this.response = res;
                })
        }
}

export default ConfigHelper;