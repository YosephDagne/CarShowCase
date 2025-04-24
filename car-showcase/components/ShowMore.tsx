"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit for the next page of results
    const newLimit = (pageNumber + 1) * 10;

    // Update the URL query parameters with the new limit
    const newPathName = updateSearchParams("limit", newLimit.toString());

    // Navigate to the updated URL
    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {/* Display "Show More" button only if there are more results */}
      {isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-blue-400 rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
