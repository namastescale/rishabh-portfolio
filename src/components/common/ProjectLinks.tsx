import {
    ExternalLink,
    Github,
    Package,
} from "lucide-react";

interface ProjectLinksProps {
    repoLink?: string;
    packageLink?: string;
    demoLink?: string;
    size?: number;
    className?: string;
}

export default function ProjectLinks({
    repoLink,
    packageLink,
    demoLink,
    size = 18,
    className = "",
}: ProjectLinksProps) {
    const iconClass =
        "text-zinc-400 transition-colors";

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {repoLink && (
                <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    title="GitHub Repository"
                    className={`${iconClass} hover:text-white`}
                >
                    <Github size={size} />
                </a>
            )}

            {packageLink && (
                <a
                    href={packageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="npm Package"
                    title="npm Package"
                    className={`${iconClass} hover:text-emerald-400`}
                >
                    <Package size={size} />
                </a>
            )}

            {demoLink && (
                <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    title="Live Demo"
                    className={`${iconClass} hover:text-sky-400`}
                >
                    <ExternalLink size={size} />
                </a>
            )}
        </div>
    );
}