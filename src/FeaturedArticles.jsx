import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './FeaturedArticles.css'; 
const articles = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MpAjIfqL1p4OHkC6Arb_u7fM6YhUod1QBg&s',
    title: 'Article 1',
    description: 'This is the first article. It provides a brief overview of the topic.',
    authors: ['Author 1'],
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YaAe-PlGfB3aqwxG3v-flM_j8jA0B3dNKA&s', 
    title: 'Article 2',
    description: 'This is the second article. It covers another important aspect of the subject.',
    authors: ['Author 2'],
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_bovUJwb83GgBedyxQqxahaEUDm2y9rGbA&s', 
    title: 'Article 3',
    description: 'This is the third article. It discusses a different perspective on the topic.',
    authors: ['Author 3'],
  },
];

const FeaturedArticles = () => {
  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="article-cards">
        {articles.map(article => (
          <Card key={article.id} className="article-card">
            <Image src={article.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="authors">
                {article.authors.join(', ')}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;

