import React, { useState } from 'react';
import '.JobPostsPage/.css'; // Import CSS file

const JobPostsPage = () => {
  const [jobPosts, setJobPosts] = useState([
    {
      id: 1,
      title: 'Frontend Developer Needed',
      description: 'We are looking for a frontend developer to join our team.',
      price: '$3000',
      duration: '30',
      skills: 'HTML, CSS, JavaScript',
      isFavorited: false,
      showDetails: false
    },
    {
      id: 2,
      title: 'Backend Engineer Position',
      description: 'Join our backend team to work on exciting projects.',
      price: '$3500',
      duration: '45',
      skills: 'Node.js, MongoDB, Express',
      isFavorited: false,
      showDetails: false
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      description: 'Looking for a full stack developer with experience in both frontend and backend technologies.',
      price: '$4000',
      duration: '60',
      skills: 'React, Python, Django',
      isFavorited: false,
      showDetails: false
    }
  ]);

  const handleFavoriteClick = (id) => {
    setJobPosts(prevJobPosts => prevJobPosts.map(jobPost => {
      if (jobPost.id === id) {
        return { ...jobPost, isFavorited: !jobPost.isFavorited };
      }
      return jobPost;
    }));
  };

  const handleToggleDetails = (id) => {
    setJobPosts(prevJobPosts => prevJobPosts.map(jobPost => {
      if (jobPost.id === id) {
        return { ...jobPost, showDetails: !jobPost.showDetails };
      }
      return jobPost;
    }));
  };

  return (
    <div className="job-posts-container">
      <h2>Job Posts</h2>
      {jobPosts.map(jobPost => (
        <div key={jobPost.id} className="job-post">
          <div className="job-post-header">
            <h3 className="job-post-title" onClick={() => handleToggleDetails(jobPost.id)}>
              {jobPost.title}
            </h3>
            <div className="job-post-buttons">
              <button className="hire-button">Hire</button>
              <button className="heart-button" onClick={() => handleFavoriteClick(jobPost.id)}>
                {jobPost.isFavorited ? 'Is Favorited' : '\u2661 Favorite'}
              </button>
            </div>
          </div>
          {jobPost.showDetails && (
            <div className="job-post-details">
              <p className="job-post-detail"><span className="job-post-label">Description:</span> {jobPost.description}</p>
              <p className="job-post-detail"><span className="job-post-label">Price:</span> {jobPost.price}</p>
              <p className="job-post-detail"><span className="job-post-label">Duration:</span> {jobPost.duration} days</p>
              <p className="job-post-detail"><span className="job-post-label">Skills:</span> {jobPost.skills}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobPostsPage;
