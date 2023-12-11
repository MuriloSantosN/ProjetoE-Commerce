import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const avatars = [
  { alt: "Marcia Silva", src: "https://cdn.pixabay.com/photo/2017/12/22/14/42/girl-3033718_1280.jpg" },
  { alt: "Ana Paula", src: "https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274361_1280.jpg" },
  { alt: "Lucas Soares", src: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg" },
  { alt: "Antonio Carlos", src: "https://cdn.pixabay.com/photo/2014/11/02/09/15/man-513529_1280.jpg" },
  { alt: "Marcela Castro", src: "https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg" },
  { alt: "Isabela Lima", src: "https://cdn.pixabay.com/photo/2016/06/19/22/46/girl-1467820_1280.jpg" },
  { alt: "João Pedro", src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" },
  { alt: "Caio Santos", src: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_640.jpg" },
  { alt: "Julia Tavares", src: "https://cdn.pixabay.com/photo/2016/11/19/12/09/couple-1838940_640.jpg" },
  { alt: "Juliana Bastos", src: "https://cdn.pixabay.com/photo/2018/07/28/09/23/woman-3567600_640.jpg" },
];

const GroupAvatars = ({ index }) => {
  const avatarIndex = index % avatars.length;

  return (
    <AvatarGroup max={2}>
      <Avatar alt={avatars[avatarIndex].alt} src={avatars[avatarIndex].src} sx={{ width: 80, height: 80 }}/>
    </AvatarGroup>
  );
}

export default GroupAvatars;
