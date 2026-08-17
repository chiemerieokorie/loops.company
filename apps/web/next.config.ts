import "@runway/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	output: "standalone",
};

export default nextConfig;
