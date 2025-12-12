import bcrypt from "bcryptjs";

export async function hashPassword(plainText: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(plainText, 10);
  return hashedPassword;
}

export async function comparePassword(
  hashedText: string,
  password: string
): Promise<boolean> {
  const isCompared = await bcrypt.compare(password, hashedText);
  return isCompared;
}
