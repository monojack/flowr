import { bool, } from 'prop-types'

const Maybe = ({ when, children = null, }) => (when ? children : null)

Maybe.propTypes = {
  when: bool,
}

export default Maybe
