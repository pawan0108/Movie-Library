import React from 'react';


export default function MovieGrid({ movies, children }) {
return (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
{movies.map(m => (
<div key={m.id}>{children(m)}</div>
))}
</div>
);
}