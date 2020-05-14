import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from '@material-ui/core/Link';

class Gallery extends React.Component {
  render() {
    const responsive = {
      0: {
        items: 1,
      },
      1024: {
        items: 2,
      },
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <Link component="button" variant="avatar2">
          <img
            src="https://avatarfiles.alphacoders.com/198/thumb-1983.jpg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar2" onClick={() => {}}>
          <img
            src="https://avatarfiles.alphacoders.com/624/thumb-624.jpg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar3">
          <img
            src="https://avatarfiles.alphacoders.com/109/thumb-1092.jpg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar4" onClick={() => {}}>
          <img
            src="https://avatarfiles.alphacoders.com/105/thumb-10536.jpg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link
          component="button"
          variant="avatar5"
          onClick={() => {
            console.info("test, I'm a button.");
          }}
        >
          <img
            src="https://www.lighthouselabs.ca/uploads/team_member/avatar/330/medium_Andy_Lindsay_profile.jpeg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar4" onClick={() => {}}>
          <img
            src="https://avatarfiles.alphacoders.com/403/thumb-4039.jpg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar4" onClick={() => {}}>
          <img
            src="https://avatarfiles.alphacoders.com/891/thumb-89146.gif"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar4" onClick={() => {}}>
          <img
            src="https://avatarfiles.alphacoders.com/902/thumb-902.jpg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar4" onClick={() => {}}>
          <img
            src="https://avatarfiles.alphacoders.com/406/thumb-4063.jpg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar4" onClick={() => {}}>
          <img
            src="https://avatarfiles.alphacoders.com/604/thumb-604.jpg"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
        <Link component="button" variant="avatar4" onClick={() => {}}>
          <img
            src="https://avatarfiles.alphacoders.com/160/thumb-160371.png"
            className="avatar-img"
            alt="avatar"
          />
        </Link>
      </AliceCarousel>
    );
  }
}

export default Gallery;
