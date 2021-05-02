import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import SectionHeader from './partials/SectionHeader';

const sectionHeader = {
    title: 'Timeline',
    paragraph: 'Highlights of our journey together ...'
  };


const Timeline = () => (
    <><SectionHeader data={sectionHeader} className="center-content" />
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <img className="avatar-image" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary className="font-color-content">
          <Feed.User className="text-color-primary-important">Rohi </Feed.User><br />We met for first time
          <Feed.Date className="font-color-content">August 2019</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like className="font-color-content">
            <Icon name='like' />234 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
        <Feed.Label>
            <img className="avatar-image" />
        </Feed.Label>
        <Feed.Content>
        <Feed.Summary className="font-color-content">
            <a className="text-color-primary-important">Rohi </a><br /> Planned trip to Alibaug
            <Feed.Date className="font-color-content">November 2019</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
            <a>
            <img className="alibaug-image-1 potrait zoom landscape-width" />
            </a>
            <a>
            <img className="alibaug-image-2 landscape zoom" />
            </a>
        </Feed.Extra>
        <Feed.Meta>
            <Feed.Like className="font-color-content">
            <Icon name='like' />146 Likes
            </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>

    <Feed.Event>
        <Feed.Label>
            <img className="avatar-image" />
        </Feed.Label>
        <Feed.Content>
        <Feed.Summary className="font-color-content">
            <a className="text-color-primary-important">Rohi </a><br /> Trip to Nainital, Corbett, Mussoorie
            <Feed.Date className="font-color-content">February 2020</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
            <a>
            <img className="crbt-muss-img-1 landscape zoom" />
            </a>
            <a>
            <img className="crbt-muss-img-2 potrait zoom landscape-width" />
            </a>
            <a>
            <img className="crbt-muss-img-3 landscape zoom" />
            </a>
            <a>
            <img className="crbt-muss-img-4 potrait zoom" />
            </a>
            <a>
            <img className="crbt-muss-img-5 landscape zoom" />
            </a>
        </Feed.Extra>
        <Feed.Meta>
            <Feed.Like className="font-color-content">
            <Icon name='like' />146 Likes
            </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label>
        <img className="avatar-image" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary className="font-color-content">
          <Feed.User className="text-color-primary-important">Rohi </Feed.User><br /> Birthday Surprise! :)
          <Feed.Date className="font-color-content">May 6, 2020</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like className="font-color-content">
            <Icon name='like' />234 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label>
        <img className="avatar-image" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary className="font-color-content">
          <Feed.User className="text-color-primary-important">Rohi </Feed.User><br />You know what ! (Best day ever !) :)
          <Feed.Date className="font-color-content">May 10, 2020</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like className="font-color-content">
            <Icon name='like' />234 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
        <Feed.Label>
            <img className="avatar-image" />
        </Feed.Label>
        <Feed.Content>
        <Feed.Summary className="font-color-content">
            <a className="text-color-primary-important">Rohi </a><br /> Meets Together at different places
            <Feed.Date className="font-color-content">Many times ...</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
            <a>
            <img className="meets-img-1 landscape zoom" />
            </a>
            <a>
            <img className="meets-img-2 landscape zoom" />
            </a>
            <a>
            <img className="meets-img-3 landscape zoom" />
            </a>
        </Feed.Extra>
        <Feed.Meta>
            <Feed.Like className="font-color-content">
            <Icon name='like' />146 Likes
            </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>

    <Feed.Event>
        <Feed.Label>
            <img className="avatar-image" />
        </Feed.Label>
        <Feed.Content>
        <Feed.Summary className="font-color-content">
            <a className="text-color-primary-important">Rohi </a><br /> Trip to Gokarna
            <Feed.Date className="font-color-content"> February 2021 </Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
            <a>
            <img className="gokarna-1 landscape zoom" />
            </a>
            <a>
            <img className="gokarna-3 landscape zoom" />
            </a>
        </Feed.Extra>
        <Feed.Meta>
            <Feed.Like className="font-color-content">
            <Icon name='like' />146 Likes
            </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label>
        <img className="avatar-image" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary className="font-color-content">
          <Feed.User className="text-color-primary-important">Rohi </Feed.User><br />Today: Your Birthday and another Surprise from me ! :)
          <Feed.Date className="font-color-content">May 6, 2021</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like className="font-color-content">
            <Icon name='like' />234 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed></>
)

export default Timeline;