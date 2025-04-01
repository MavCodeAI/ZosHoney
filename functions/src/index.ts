import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.setAdminClaim = functions.https.onCall(async (data, context) => {
  // Check if the request is made by an existing admin
  if (context.auth?.token.admin !== true) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'Only admins can add other admins'
    );
  }

  const { email } = data;
  if (!email) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Email is required'
    );
  }

  try {
    // Get the user by email
    const user = await admin.auth().getUserByEmail(email);
    
    // Set admin claim
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    
    return { message: `Successfully set admin claim for ${email}` };
  } catch (error) {
    throw new functions.https.HttpsError(
      'internal',
      'Error setting admin claim',
      error
    );
  }
}); 