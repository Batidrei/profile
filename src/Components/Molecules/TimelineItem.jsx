import React from 'react'
import PropTypes from 'prop-types'

const TimelineItem = ({id, company, current, description, title, time}) => (
  <li className="timeline__item">
    {
      current
      ? <input className="timeline__radio" id={ `work${id}` } name="works" type="radio" defaultChecked />
      : <input className="timeline__radio" id={`work${id}`} name="works" type="radio" />
    }
    <div className="timeline__relative">
      <label className="timeline__label" htmlFor={`work${id}`}><strong>{ company } - { title }</strong></label>
      <span className="timeline__date">{ time }</span>
      <span className="timeline__circle"></span>
    </div>
    <div className="timeline__content">
      <p className="timeline__title">{ description }</p>
    </div>
  </li>
)

TimelineItem.propTypes = {
  id: PropTypes.number,
  company: PropTypes.string,
  current: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string
}

TimelineItem.defaultProps = {
  id: 1,
  company: 'Freelancer',
  current: true,
  description: 'Developer and designer.',
  title: 'Frontend Mid.',
  time: 'Current'
}

export default TimelineItem