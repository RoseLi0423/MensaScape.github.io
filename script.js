const topics = {
  title: 'Menstruation',
  items: [{
    title: 'Emotion',
    items: [{
      title: 'Sad',
      items: []
    }, {
      title: 'Sensitive',
      items: [{
        title: 'Irritable',
        items: []
      }, {
        title: 'Conflict',
        items: []
      },{
        title: 'Withdrawn',
        items: []
      }]
    }, {
      title: 'Stressed',
      items: [{
        title: 'Anxious',
        items: []
      }, {
        title: 'Impatient',
        items: []
      }, {
        title: 'Restless',
        items: []
      }]
    }]
  }, {
    title: 'Physical',
    items: [{
      title: 'Appetite',
      items: [{
        title: 'Digestion',
        items: [{
          title: 'Bloated',
          items: []
        }, {
          title: 'Nauseated',
          items: []
        }]
      }, {
        title: 'Carving',
        items: [{
          title: 'Sweet',
          items: []
        }, {
          title: 'Complex',
          items: []
        }, {
          title: 'Spicy',
          items: []
        }, {
          title: 'Hot pot',
          items: []
        }]
      }]
    }, {
      title:'Period',
      items:[{
          title: 'Heavy',
          items: []
        }, {
          title: 'Spotting',
          items: []
        }]
    },{
      title: 'Uncomfort',
      items: [{
          title: 'Pain',
          items: [{
            title:'Swelling',
            items:[]
          },{
            title:'Sore',
            items:[]
          },{
            title:'Cramp',
            items:[]
          },{
            title:'Headache',
            items:[]
          }]
        }, {
          title: 'Sensory',
          items: [{
            title:'Cold',
            items:[]
          },{
            title:'Heaviness',
            items:[]
          },{
            title:'Dizzy',
            items:[]
          }]
        }, {
          title: 'Acne',
          items: []
        }]
    }]
  }, {
    title: 'Behaviour',
    items: [{
      title: 'Sleep',
      items: [{
        title: 'Disorder',
        items: []
      }, {
        title: 'Sleepy',
        items: []
      }]
    }, {
      title: 'Energy',
      items: [{
        title: 'Unproductive',
        items: []
      }, {
        title: 'Unmotivated',
        items: []
      }, {
        title: 'Distracted',
        items: []
      },{
        title: 'Exhausted',
        items: []
      }]
    }]
  }]
}

const getTopicTemplate = ({ level, prevRotation }) =>
  ({ title, items }, i = 0, a = ['']) => {
    const range = 180 - 5 * level
    const step = range / a.length
    const rotation = (step * (a.length / 2) * -1) + step * (i + 0.5)
    const totalRotation = prevRotation + rotation
    const nextLevel = Math.min(6, level + 1)
    const fixedRotation = totalRotation < -90 || totalRotation > 90 ? -180 : 0
    const topicTemplate = getTopicTemplate({ level: nextLevel, prevRotation: totalRotation })
    return `
      <details open style="--rotation: ${rotation}deg; --level: ${level}; --i: ${i};">
        <summary style="--fixed-rotation: ${fixedRotation}deg;">
          <h${level}>${title}</h${level}>
        </summary>
        <div class="items">
          ${items.map(topicTemplate).join('')}
        </div>
      </details>
    `
  }

const topicTemplate = getTopicTemplate({ level: 1, prevRotation: 0 })
container.innerHTML = topicTemplate(topics)