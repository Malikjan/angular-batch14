import HCCUserResolver from './user/user.resolver.js'
import HCCDoctorResolver from './doctor/doctor.resolver.js'

const HCCResolver = () => {
        HCCUserResolver,
        HCCDoctorResolver
}

export default HCCResolver
