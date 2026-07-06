import Image from "next/image";
import type { Project } from "../../data/projects";

type CardProps = {
  project: Project;
  featured?: boolean;
};

export default function Card({
  project,
  featured = false,
}: CardProps) {
  const {
    title,
    description,
    tags,
    image,
    liveUrl,
    githubUrl,
    status,
    year,
  } = project;

  return (
    <div
      className={`group bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gray-300 dark:hover:border-gray-500 ${
        featured ? "lg:flex lg:items-stretch shadow-xl ring-1 ring-blue-100 dark:ring-blue-900" : ""
      }`}
    >
      {/* Project Image */}
      {image && (
        <div
          className={`relative ${
            featured ? "lg:w-1/2 h-80" : "w-full h-48"
          } overflow-hidden`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}

      {/* Content */}
      <div
        className={`${
          featured ? "lg:w-1/2 p-8" : "p-6"
        } flex flex-col`}
      >
        {/* Title */}
        <h3 className="text-2xl font-bold dark:text-white">
          {title}
        </h3>

        {/* Status & Year */}
        <div className="flex items-center gap-2 mt-2 mb-4">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              status === "Completed"
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
            }`}
          >
            {status}
          </span>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            {year}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
       <div className="flex gap-3 mt-auto pt-6">
  {liveUrl && (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
    >
      Live Demo →
    </a>
  )}

  {githubUrl && (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      GitHub →
    </a>
  )}
</div>
      </div>
    </div>
  );
}