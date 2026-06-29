import api from "../../api/axios";

/*
|--------------------------------------------------------------------------
| Resume Score
|--------------------------------------------------------------------------
*/

export const getResumeScore =
  async () => {
    const response =
      await api.get(
        "/resume-score"
      );

    return response.data;
  };

/*
|--------------------------------------------------------------------------
| Advanced Resume Score
|--------------------------------------------------------------------------
*/

export const getAdvancedResumeScore =
  async () => {
    const response =
      await api.get(
        "/advanced-resume-score"
      );

    return response.data;
  };

/*
|--------------------------------------------------------------------------
| Career Readiness
|--------------------------------------------------------------------------
*/

export const getCareerReadiness =
  async () => {
    const response =
      await api.get(
        "/career-readiness"
      );

    return response.data;
  };

/*
|--------------------------------------------------------------------------
| Job Readiness Report
|--------------------------------------------------------------------------
*/

export const getJobReadinessReport =
  async () => {
    const response =
      await api.get(
        "/job-readiness-report"
      );

    return response.data;
  };

/*
|--------------------------------------------------------------------------
| Download PDF Report
|--------------------------------------------------------------------------
*/

export const downloadPdfReport =
  async () => {
    const response =
      await api.get(
        "/pdf-report/export",
        {
          responseType:
            "blob",
        }
      );

    const url =
      window.URL.createObjectURL(
        new Blob([
          response.data,
        ])
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    link.setAttribute(
      "download",
      "career-report.pdf"
    );

    document.body.appendChild(
      link
    );

    link.click();

    link.remove();

    window.URL.revokeObjectURL(
      url
    );
  };