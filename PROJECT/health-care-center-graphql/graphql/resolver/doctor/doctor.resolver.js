import { utillQuery } from '../../../config/db.js';

const HCCDoctorResolver = {
    getAllDoctor: (args, req) =>
        utillQuery(req, 'select * from doctor').then(allDoctor => allDoctor)
}

export default HCCDoctorResolver
