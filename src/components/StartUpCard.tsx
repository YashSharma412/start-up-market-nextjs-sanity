import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StartUpCard = ({ post }: { post: PostType }) => {
  const {
    _id,
    _createdAt,
    // _updatedAt,
    title,
    description,
    // votes,
    views,
    category,
    // tags,
    image,
    author: { _id: authorId, name },
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary " />
          <span className="post-views text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="post-author-name text-16-medium line-clamp-1 hover:underline underline-offset-2">
              {name}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="text-26-semibold line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            className="author-avatar hover:outline-1 outline-offset-2 rounded-full"
            width={48}
            height={48}
            alt={name + "image"}
          ></Image>
        </Link>
      </div>
      <div>
        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">
            {description}
          </p>
          <Image 
            src={image}
            className="startup-card_img"
            width={1200}
            height={400}
            alt={title + " image"}
          />
        </Link>
      </div>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?querry=${category.toString().toLowerCase().split(" ").join("+")}`}>
          <p className="text-16-medium">
            {category}
          </p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>
            Details
          </Link>
        </Button>

      </div>
    </li>
  );
};

export default StartUpCard;
