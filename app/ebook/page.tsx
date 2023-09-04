import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";

const ARTICLE_LIST = [
	{ title: `Chapter-01`, description: `ตอนที่ 1 เกมส์ออนไลน์`, download: `https://drive.google.com/file/d/1EWxIOSfCqvskQ3szYCndv3FM59X4jBxG/view?usp=sharing`, date: ``, view: ``, preview: `/previews/chapter-1.png`, views: 1023 },
	{ title: `Chapter-02`, description: `โดนหลอกเข้าแล้วเรา`, download: `https://drive.google.com/file/d/1RRNiJyNC535ySQUDAqifPrH6Mam-9-aZ/view?usp=sharing`, date: ``, view: ``, preview: `/previews/chapter-2.png`, views: 1412 },
	{ title: `Chapter-03`, description: `สงครามโซเชียล`, download: `https://drive.google.com/file/d/1T3K1DESu9yMXD3D8Me07YSALj7L9HfFZ/view?usp=sharing`, date: ``, view: ``, preview: `/previews/chapter-3.png`, views: 877 },
	{ title: `Chapter-04`, description: `ยุทธการปราบข่าวปลอม`, download: `https://drive.google.com/file/d/1a_XJ1kBKBGwTgctoGJF8ayAgsxkWY4lu/view?usp=sharing`, date: ``, view: ``, preview: `/previews/chapter-4.png`, views: 673 },
	{ title: `Chapter-05`, description: `ฮีโร่ดิจิทัล ใครๆ ก็เป็นได้`, download: `https://drive.google.com/file/d/1jxFOU0l4AOLjHdcMdaxyYKU3x1Q6f20_/view?usp=sharing`, date: ``, view: ``, preview: `/previews/chapter-5.png`, views: 1223 },
	{ title: `All Chapters`, description: `รวม ตอนที่ 1-5`, download: `https://drive.google.com/file/d/1g9mW3-0TDj8mTy9J6KB2fwbn9LIOECjh/view?usp=sharing`, date: ``, view: ``, preview: `/previews/all-chapters.png`, views: 1223 }
]

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = (
		await redis.mget<number[]>(
			...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
		)
	).reduce((acc, v, i) => {
		acc[allProjects[i].slug] = v ?? 0;
		return acc;
	}, {} as Record<string, number>);

	const featured = allProjects.find((project) => project.slug === "unkey")!;
	const top2 = allProjects.find((project) => project.slug === "planetfall")!;
	const top3 = allProjects.find((project) => project.slug === "highstorm")!;
	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						E-Book(s)
					</h2>
					<p className="mt-4 text-white">
						These are electronic books which could help you develop your Social-Vaccine.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />


				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					{/* {sorted
							.filter((_, i) => i % 3 === 0) */}
					{ARTICLE_LIST.map((project) => (
						<div className="grid grid-cols-1 gap-4">
							<Card key={project.title}>
								<div className="flex justify-center mt-8">
									<img alt={`${project.title}`} className="irnPqc w-3/4" src={`${project.preview}`} data-iml="91125.90000000037" data-atf="true"></img>
								</div>

								<Article project={project} views={project.views} />
							</Card>
						</div>
					))}
					{/* https://drive.google.com/file/d/1DfdIzZ1Su4mlipB1K2JKEJa95gVA-9dN/view?usp=drive_link */}
					{/* <div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div> */}
				</div>
			</div>
		</div>
	);
}
