(function () {
	const deviconBaseUrl =
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
	const techStack = [
		{ name: "Python", icon: "python/python-original.svg", alt: "Python Icon" },
		{ name: "Django", icon: "django/django-plain.svg", alt: "Django Icon" },
		{ name: "DRF", icon: "djangorest/djangorest-original.svg", alt: "DRF Icon" },
		{
			name: "AWS",
			icon: "amazonwebservices/amazonwebservices-original-wordmark.svg",
			alt: "AWS Icon",
		},
		{ name: "K8S", icon: "kubernetes/kubernetes-original.svg", alt: "K8S Icon" },
		{ name: "Docker", icon: "docker/docker-original.svg", alt: "Docker Icon" },
		{
			name: "PostgreSQL",
			icon: "postgresql/postgresql-original.svg",
			alt: "PostgreSQL Icon",
		},
		{ name: "MongoDB", icon: "mongodb/mongodb-original.svg", alt: "MongoDB Icon" },
		{
			name: "RabbitMQ",
			icon: "rabbitmq/rabbitmq-original.svg",
			alt: "RabbitMQ Icon",
			invert: true,
		},
		{ name: "Redis", icon: "redis/redis-original.svg", alt: "Redis Icon" },
		{ name: "Rust", icon: "rust/rust-original.svg", alt: "Rust Icon" },
		{ name: "Solidity", icon: "solidity/solidity-original.svg", alt: "Solidity Icon" },
		{ name: "Java", icon: "java/java-original.svg", alt: "Java Icon" },
		{
			name: "JavaScript",
			icon: "javascript/javascript-original.svg",
			alt: "JavaScript Icon",
		},
		{
			name: "TypeScript",
			icon: "typescript/typescript-original.svg",
			alt: "TypeScript Icon",
		},
		{ name: "NodeJs", icon: "nodejs/nodejs-original.svg", alt: "NodeJs Icon" },
		{ name: "NextJs", icon: "nextjs/nextjs-original.svg", alt: "nextjs Icon" },
		{ name: "React", icon: "react/react-original.svg", alt: "React Icon" },
		{ name: "Flutter", icon: "flutter/flutter-original.svg", alt: "flutter Icon" },
		{ name: "Vue", icon: "vuejs/vuejs-original.svg", alt: "Vuejs Icon" },
		{ name: "Heroku", icon: "heroku/heroku-plain.svg", alt: "Heroku Icon" },
		{ name: "Ansible", icon: "ansible/ansible-original.svg", alt: "Ansible Icon" },
		{ name: "DynamoDB", icon: "dynamodb/dynamodb-original.svg", alt: "DynamoDB Icon" },
		{ name: "Grafana", icon: "grafana/grafana-original.svg", alt: "Grafana Icon" },
		{ name: "Terraform", icon: "terraform/terraform-original.svg", alt: "Terraform Icon" },
	];

	function renderTechStack() {
		const list = document.getElementById("tech-stack-list");

		if (!list) {
			return false;
		}

		const fragment = document.createDocumentFragment();

		techStack.forEach((tech) => {
			const item = document.createElement("li");
			item.className = "tech-stack-box";
			item.setAttribute("data-aos", "fade-up");

			const image = document.createElement("img");
			image.src = `${deviconBaseUrl}/${tech.icon}`;
			image.alt = tech.alt;
			image.className = tech.invert
				? "tech-stack-logo needtobeinvert"
				: "tech-stack-logo";

			const tooltip = document.createElement("span");
			tooltip.className = "tooltip";
			tooltip.textContent = tech.name;

			item.append(image, tooltip);
			fragment.appendChild(item);
		});

		list.replaceChildren(fragment);

		if (window.AOS) {
			window.AOS.refreshHard();
		}

		return true;
	}

	if (!renderTechStack() && document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", renderTechStack, { once: true });
	}
})();
