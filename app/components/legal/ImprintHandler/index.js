'use strict'

import React from 'react'
import HeadParams from '../../../lib/HeadParams'

require('./index.less')

export default class ImprintHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Imprint - Optonaut')
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.')
  }

  render() {
    return (
      <div id='imprint'>
        <div className='container' id='imprint-content'>
          Optonaut Limited<br /><br />

          Registered Office: Weston Street, London, SE1 3ER<br />
          Phone: +44 (0) 7752 342042<br />
          E-Mail: <a href='mailto:hello@optonaut.co'>hello@optonaut.co</a><br />

          <h3>Copyright</h3>

          The copyright of the contents of the Optonaut website lie with Optonaut.
          Further usage, also in parts, requires the approval by Optonaut.

          <h3>Disclaimer</h3>

          Optonaut does not assume any liability for the type or correctness of the material available on the
          Optonaut website. Optonaut is not liable for use of this material. In case contents of the Optonaut
          website violate legal regulations, we ask you to inform us immediately.
          The contents will then be removed as quickly as possible.

          <h3>Data Protection</h3>
          This website makes use of Google Analytics. Therefore, anonymous usage statistics are collected.
          Data entered into the website is exclusively used for the indicated purposes
          and not transmitted to 3rd parties.
        </div>
      </div>
    )
  }
}

ImprintHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
}
