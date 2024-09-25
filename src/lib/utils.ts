import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatText(text: string): string {
  // Check if the text length is already less than or equal to 225
  if (text.length <= 100) {
    return text;
  }

  // Trim the text to 225 characters first
  let trimmedText = text.slice(0, 100);

  // Check if the last character is part of a word, and trim to the last full word
  if (text[100] && text[100] !== ' ') {
    // Find the last space in the trimmed string
    const lastSpaceIndex = trimmedText.lastIndexOf(' ');
    if (lastSpaceIndex > 0) {
      trimmedText = trimmedText.slice(0, lastSpaceIndex);
    }
  }

  // Add '...' to the trimmed text
  return trimmedText + '...';
}