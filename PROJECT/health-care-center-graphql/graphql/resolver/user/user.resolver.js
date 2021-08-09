import { utillQuery } from '../../../config/db.js';

const HCCUserResolver = {
    getAllUser: (args, req) =>
        utillQuery(req, 'select * from user')
            .then(allUser => allUser)
}

export default HCCUserResolver
