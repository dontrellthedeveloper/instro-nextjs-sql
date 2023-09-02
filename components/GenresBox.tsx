'use client'

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const GenresBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      genre: label,
    };

    if (params?.get("genre") === label) {
      delete updatedQuery.genre;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
    onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-5
        border-b-2
        hover:text-slate-100
        transition
        cursor-pointer
        ${selected ? "border-transparent md:border-b-slate-100" : "border-transparent"}
        ${selected ? "text-slate-100" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm text-center">{label}</div>
    </div>
  );
};

export default GenresBox;