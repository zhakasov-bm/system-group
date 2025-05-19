import { withPayload } from '@payloadcms/next/withPayload';
import createNextIntlPlugin from 'next-intl/plugin';

// You need to specify your request config path for next-intl
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const baseConfig = {
  experimental: {
    reactCompiler: false,
  },
};

// Apply both plugins: first next-intl, then Payload
export default withPayload(withNextIntl(baseConfig));
