import React from 'react'
import PropTypes from 'prop-types'

const Repository = ({ repository, onFetchMoreIssues, onStarRepository }) =>
  repository ? (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a target="_blank" href={repository.url}>
          {repository.name}
        </a>
        <button type="button" onClick={() => onStarRepository(repository.id, repository.viewerHasStarred)}>
          {repository.stargazers.totalCount}
          {repository.viewerHasStarred ? ' Unstar' : ' Star'}
        </button>
      </p>

      <ul>
        {repository.issues.edges.map(issue => (
          <li key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>

            <ul>
              {issue.node.reactions.edges.map(reaction => <li key={reaction.node.id}>{reaction.node.content}</li>)}
            </ul>
          </li>
        ))}
      </ul>

      <hr />

      {repository.issues.pageInfo.hasNextPage && <button onClick={onFetchMoreIssues}>More</button>}
    </div>
  ) : (
    <div>Repository not found</div>
  )
Repository.propTypes = {
  repository: PropTypes.shape().isRequired,
  onFetchMoreIssues: PropTypes.func.isRequired,
  onStarRepository: PropTypes.func.isRequired
}
export default Repository
