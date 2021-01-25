import React, { Component } from 'react'
import Timeline from '../Organims/Timeline'
import Axios from "axios"

// export const TimelinePage = () => {
//   const [timelineData, setTimelineData] = useState({ timelineData: [] })

//   useEffect(async () => {
//     const result = await axios(
//       'http://my-json-server.typicode.com/AlexAndrei04/profile-db/db',
//     );

//     setTimelineData(result.data)
//   }, [])

//   return (
//     <>
//       <h2>Timeline</h2>
//       <Timeline timelineData={setTimelineData} />
//     </>
//   )
// }

class TimelinePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timelineData: []
    }
  }

  componentDidMount() {
    Axios.get('http://my-json-server.typicode.com/AlexAndrei04/profile-db/db')
      .then(ResponseTimeline => this.setState({
        timelineData: ResponseTimeline.data.timeline
      }))
  }

  render() {
    const { timelineData } = this.state

    return (
      <div className='py-5'>
        <h1>Timeline</h1>
        <Timeline timelineData={timelineData} />
      </div>
    )
  }
}

export default TimelinePage