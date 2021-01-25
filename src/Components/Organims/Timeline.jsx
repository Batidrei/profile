import React from 'react'
import TimelineItem from '../Molecules/TimelineItem'

const Timeline = ({timelineData}) => (
  <>
    <ul className="timeline animated fade--in">
      {
        timelineData.map( t => (
          <TimelineItem
            key={ t.id }
            id={ t.id }
            company={ t.company }
            current={ t.current }
            description={ t.description }
            title={ t.title }
            time={ t.time }
          />
        ))
      }
    </ul>
  </>
)

export default Timeline