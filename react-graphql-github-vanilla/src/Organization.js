import React from 'react'
import PropTypes from 'prop-types'

import Repository from './Repository'

const Organization = ({ organization, errors, onFetchMoreIssues, onStarRepository }) => {
  if (errors) {
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map(error => error.message).join(' ')}
      </p>
    )
  }

  return (
    <div>
      <p>
        <strong>Issues from Organization:</strong>
        <a target="_blank" href={organization.url}>
          {organization.name}
        </a>
      </p>
      <Repository
        repository={organization.repository}
        onFetchMoreIssues={onFetchMoreIssues}
        onStarRepository={onStarRepository}
      />
    </div>
  )
}
Organization.propTypes = {
  organization: PropTypes.shape().isRequired,
  errors: PropTypes.shape().isRequired,
  onFetchMoreIssues: PropTypes.func.isRequired,
  onStarRepository: PropTypes.func.isRequired
}

export default Organization
