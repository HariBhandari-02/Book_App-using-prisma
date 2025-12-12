import * as crypto from "crypto";

// hash configuration
const HASH_ALGORITHM = "sha256";

function createHash(data: string): string {
  return crypto.createHash(HASH_ALGORITHM).update(data).digest("hex");
}


