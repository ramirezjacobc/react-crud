import React from 'react';

export default function Breadcrumb({section}) {
  const sectionTitle = (
    <li className="is-active">
      <a href="#" aria-current="page">{section}</a>
    </li>
  )
  const innerSection = (
    <div>
      { section !== '' ? sectionTitle : '' }
    </div>
  )

  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Books</a></li>
          { innerSection }
        </ul>
      </nav>
    </div>
  )
}
