import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental reactCompiler setting
};

export default withPayload(nextConfig);
