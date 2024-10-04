import dotenv from 'dotenv';
dotenv.config();

// safety checks for env variables
const checkEnv = () => {
  if (!process.env.BASE_API_URL) {
    throw new Error('BASE_API_URL env is required');
  }

  if (!process.env.CANDIDATE_ID) {
    throw new Error('CANDIDATE_ID env is required');
  }
};

checkEnv();

export const Env = {
  BASE_API_URL: process.env.BASE_API_URL!,
  CANDIDATE_ID: process.env.CANDIDATE_ID!,
};
