import { create } from 'ipfs-http-client';

const projectId = process.env.NEXT_PUBLIC_INFURA_ID;;

if (!projectId) {
  throw new Error('Must define INFURA_PROJECT_ID');
}

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(`${projectId}`, 'utf-8').toString('base64')}`,
  },
});

export const uploadIpfs = async <T>(data: T) => {
  const result = await client.add(JSON.stringify(data));

  console.log('upload result ipfs', result);
  return result;
};