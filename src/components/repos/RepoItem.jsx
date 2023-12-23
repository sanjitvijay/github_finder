import { FaLink, FaStar, FaEye, FaUtensils, FaInfo} from "react-icons/fa"

function RepoItem({repo}) {
  return (
    <div>
        <div className="rounded-lg shadow-lg card bg-base-100" >
            <div className="card-body">
                <div className="card-title">
                    <FaLink/>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                    </a>
                </div>
                <div>
                    <div className="badge badge-info mr-2">
                        <FaEye className="mr-1"/>
                        {repo.watchers_count}
                    </div>
                    <div className="badge badge-success mr-2">
                        <FaStar className="mr-1"/>
                        {repo.stargazers_count}
                    </div>
                    <div className="badge badge-error mr-2">
                        <FaInfo className="mr-1"/>
                        {repo.open_issues}
                    </div>
                    <div className="badge badge-warning mr-2">
                        <FaUtensils className="mr-1"/>
                        {repo.forks}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepoItem